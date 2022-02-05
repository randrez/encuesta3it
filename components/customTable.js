import React from 'react'
import { View, Text } from 'react-native'
import Styles from '../resources/styles/styles'

export default ({ items }) => {
    const renderItems = []

    items.map((item, key) => {
        let borderTop = 0
        if (key == 0) {
            borderTop = 1
        }
        renderItems.push(
            <View style={[Styles.content_table, { borderTopWidth: borderTop }]} key={key}>
                <Text style={Styles.item}>{item.name}</Text>
                <Text style={Styles.item}>{item.count}</Text>
            </View>
        )
    })

    return (
        <>
            {renderItems}
        </>
    )
}