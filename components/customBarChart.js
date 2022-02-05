import React, { Component } from 'react'
import { View, Dimensions, Text } from 'react-native'
import Colors from '../resources/styles/colors'
import { BarChart } from 'react-native-chart-kit'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height/2

const config = {
    backgroundColor: Colors.white,
    backgroundGradientFrom: Colors.white,
    backgroundGradientTo: Colors.white,
    color: () => Colors.primary,
}

const style = { marginVertical: 10 }

export default class CustomBarChart extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{marginTop:20}}>
                <BarChart
                    width={width}
                    height={height}
                    data={this.props.data}
                    chartConfig={config}
                    style={style}
                />
            </View>
        )
    }

}