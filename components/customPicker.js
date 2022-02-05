import React from 'react'
import { View, Text } from 'react-native'
import { Picker as SelectPicker } from '@react-native-picker/picker'
import Styles from '../resources/styles/styles'

export default ({ title, data, ...rest }) => {

    const items = data.map((item) => {
        return <SelectPicker.Item style={Styles.text} label={item.label} value={item} key={item.id} />
    })

    return (
        <View style={Styles.picker}>
            <Text style={Styles.picker_title}>
                {title}
            </Text>
            <View style={{borderWidth:1}}>
                <SelectPicker {...rest} style={Styles.selected_picker}>
                    {items}
                </SelectPicker>
            </View>
        </View>
    )
}