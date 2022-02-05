import React from 'react'
import { View, SafeAreaView, Text, ScrollView } from 'react-native'
import Styles from '../resources/styles/styles'
import CustomBarChart from '../components/customBarChart'
import Colors from '../resources/styles/colors'
import String from '../resources/strings/string'
import { getNamesGenre, getCountGenre } from '../utils/util'
import CustomTable from '../components/customTable'

export default () => {

    const dataList = [{ name: 'Pop', count: 20 }, { name: 'Rock', count: 45 }, { name: 'Jazz', count: 28 }, { name: 'Clasica', count: 80 }, { name: 'Electronica', count: 43 }]
    const data = {
        labels: getNamesGenre(dataList),
        datasets: [
            {
                data: getCountGenre(dataList),
            }
        ]
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
                    <CustomTable items={dataList} />
                    <CustomBarChart data={data} style={Styles.barchart} />
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}