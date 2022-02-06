import React, { Component } from 'react'
import { View, Dimensions, Text } from 'react-native'
import Colors from '../resources/styles/colors'
import { BarChart } from 'react-native-chart-kit'
import String from '../resources/strings/string'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height / 2

const config = {
    backgroundColor: Colors.white,
    backgroundGradientFrom: Colors.white,
    backgroundGradientTo: Colors.white,
    color: () => Colors.primary,
}

const style = { marginVertical: 0 }

export default class CustomBarChart extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.data.labels.length > 0) {
            return (
                <View style={{ marginTop: 20 }}>
                    <BarChart
                        width={width}
                        height={height}
                        data={this.props.data}
                        chartConfig={config}
                        style={style}
                    />
                </View>
            )
        } else {
            return (<Text>{String.noInformation}</Text>)
        }
    }

}