import React from 'react'
import { Text, SafeAreaView, View } from 'react-native'
import Styles from '../resources/styles/styles'
import String from '../resources/strings/string'

export default () => {

    console.log('aout')

    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.content_survey}>
                <View style={Styles.header_title}>
                    <Text style={Styles.title}>
                        {String.welcome}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}