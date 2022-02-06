import React, { useState, useEffect } from 'react'
import { View, SafeAreaView, Text, ScrollView, ActivityIndicator } from 'react-native'
import Styles from '../resources/styles/styles'
import CustomBarChart from '../components/customBarChart'
import Colors from '../resources/styles/colors'
import String from '../resources/strings/string'
import CustomTable from '../components/customTable'
import { apiGet } from '../apis/generalApi'
import {getDataGraphic} from '../utils/util'

export default () => {

    const [loading, setLoading] = useState(true)
    const [results, setResults] = useState([])

    useEffect(() => {
        fecthResults()
    }, [])

    const fecthResults = async () => {
        const items = []
        const response = await apiGet(String.resultsSurvey)
        if (response) {
            setLoading(false)
            if (response.state) {
                response.data.map((data) => {
                    const item = { name: data[0], count: data[1] }
                    items.push(item)
                })
                setResults(items)
            } else {
                Alert.alert(String.execptionTitle, response.message)
            }
        }
    }

    return (
        <SafeAreaView style={[Styles.container, { backgroundColor: Colors.white }]}>
            <ScrollView style={{ flexDirection: 'column', flex: 1 }}>
                <View style={Styles.content_results}>
                    <View style={Styles.header_title}>
                        <Text style={Styles.title}>
                            {String.titleResults}
                        </Text>
                    </View>
                    {loading ?
                        <>
                            <ActivityIndicator size="large" color={Colors.primary} />
                        </> : <>
                            <CustomTable items={results} />
                            <CustomBarChart data={getDataGraphic(results)} style={Styles.barchart} />
                        </>}
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}