import React, { useState, useEffect, useRef } from 'react'
import { Text, SafeAreaView, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native'
import { CustomPicker } from '../components'
import Styles from '../resources/styles/styles'
import Colors from '../resources/styles/colors'
import String from '../resources/strings/string'
import { apiGet, apiPost } from '../apis/generalApi'
import NetInfo from '@react-native-community/netinfo'

export default ({ navigation }) => {

    const [loading, setLoading] = useState(true)
    const [selectedItem, setSelectedItem] = useState()
    const [email, setEmail] = useState('')
    const [genres, setGenres] = useState([])
    const [isConnected, setIsConnected] = useState()
    const refInput = useRef()

    useEffect(() => {
        fetchGenres()
        checkConnection()
        const willFocusSubscription = navigation.addListener('focus', () => {
            setSelectedItem([{ id: 0, label: String.selection }])
            setEmail('')
            checkConnection()
            setLoading(true)
            fetchGenres()
        })
        return willFocusSubscription
    }, [navigation])

    const checkConnection = () => {
        NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected)
        })
    }

    const fetchGenres = async () => {
        const arrayGenres = []
        const response = await apiGet(String.listGenre)
        if (response) {
            setLoading(false)
            if (response.state) {
                arrayGenres.push({ id: 0, label: String.selection })
                response.data.map((data) => {
                    const item = { id: data.id, label: data.name }
                    arrayGenres.push(item)
                })
                setGenres(arrayGenres)
            } else {
                Alert.alert(String.execptionTitle, response.message)
            }
        }
    }

    const handlerSelectedItem = item => {
        setSelectedItem(item)
    }

    const handlerChangeText = email => {
        setEmail(email)
    }

    const handlerPressButton = () => {
        if (selectedItem != undefined && selectedItem.id != 0) {
            if (email != '') {
                setLoading(true)
                sendSurvey()
            } else {
                Alert.alert(String.titleEmail, String.messageEmail)
            }
        } else {
            Alert.alert(String.titleGenre, String.messageGenre)
        }
    }

    const sendSurvey = async () => {
        const response = await apiPost(String.createSurvey, { musicGenreId: selectedItem.id, email: email })
        console.log(response)
        if (response.state) {
            setLoading(false)
            Alert.alert(
                String.successTitle,
                String.successMessage,
                [{
                    text: String.ok, onPress: () => {
                        setSelectedItem(genres[0])
                        setEmail('')
                        refInput.current.focus()
                    }
                }],
                { cancelable: false })
        } else {
            Alert.alert(String.execptionTitle, response.message)
        }
    }

    return (
        <SafeAreaView style={Styles.container}>
            {isConnected ? <>
                <View style={Styles.content_survey}>
                    <View style={Styles.header_title}>
                        <Text style={Styles.title}>
                            {String.titleSurvey}
                        </Text>
                    </View>
                    {loading ?
                        <>
                            <ActivityIndicator size="large" color={Colors.primary} />
                        </> : <>
                            <CustomPicker
                                title={String.titlePickerSurvey}
                                data={genres}
                                selectedValue={selectedItem}
                                onValueChange={handlerSelectedItem}
                            />
                            <View>
                                <TextInput
                                    ref={refInput}
                                    style={Styles.input}
                                    onChangeText={handlerChangeText}
                                    value={email}
                                    placeholder={String.placeholderEmail}
                                    keyboardType="email-address"
                                />
                            </View>
                            <View>
                                <Button
                                    style={{ width: 200 }}
                                    title={String.send}
                                    onPress={handlerPressButton}
                                />
                            </View>
                        </>}
                </View>
            </> : <>
                <View style={Styles.header_title}>
                    <Text style={Styles.title}>
                        {String.noConnection}
                    </Text>
                </View>
            </>}
        </SafeAreaView>
    )
}