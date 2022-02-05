import React, { useState, useEffect, useRef } from 'react'
import { Text, SafeAreaView, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native'
import { CustomPicker } from '../components'
import Styles from '../resources/styles/styles'
import Colors from '../resources/styles/colors'
import String from '../resources/strings/string'
import { apiGet } from '../apis/generalApi'

export default () => {

    const [loading, setLoading] = useState(true)
    const [selectedItem, setSelectedItem] = useState()
    const [email, setEmail] = useState('')
    const [genres, setGenres] = useState([])
    const refInput = useRef()

    useEffect(() => {
        fetchGenres()
    }, [])

    const fetchGenres = async () => {
        const response = await apiGet()
        const arrayGenres = []
        arrayGenres.push({ id: 0, label: String.selection })
        response.map((data) => {
            let item = { id: data.id, label: data.name }
            arrayGenres.push(item)
        })
        setGenres(arrayGenres)
        setLoading(false)
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
                setSelectedItem(genres[0])
                setEmail('')
                refInput.current.focus()
            } else {
                Alert.alert(String.titleEmail, String.messageEmail)
            }
        } else {
            Alert.alert(String.titleGenre, String.messageGenre)
        }
    }

    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.content_poll}>
                <View style={Styles.header_title}>
                    <Text style={Styles.title}>
                        {String.titlePoll}
                    </Text>
                </View>
                {loading ?
                    <>
                        <ActivityIndicator size="large" color={Colors.primary} />
                    </> : <>
                        <CustomPicker
                            title={String.titlePickerPoll}
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
        </SafeAreaView>
    )
}