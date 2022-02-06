import { StyleSheet } from 'react-native'
import Colors from './colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    content_survey: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content_results: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginHorizontal: 10,
    },
    header_title: {
        paddingBottom: 20,
        paddingTop: 20
    },
    title: {
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
    },
    picker_title: {
        marginBottom: 10
    },
    picker: {
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    selected_picker: {
        width: 200
    },
    text: {
        textAlign: 'center',
        color: Colors.black
    },
    input: {
        width: 200,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    barchart:{
        flex:1,
        justifyContent:'center'
    },
    content_table:{
        width:'100%',
        flexDirection: 'row', 
        borderBottomWidth: 1, 
        borderBottomColor: Colors.grayDark,  
        borderTopColor: Colors.grayDark
    },
    item:{
        flex: 1, 
        alignItems: 'center', 
        borderLeftWidth:1,
        borderRightWidth:1,
        borderColor:Colors.grayDark,
        justifyContent: 'center', 
        textAlign: 'center', 
        color: Colors.grayDark
    }
})

export default styles