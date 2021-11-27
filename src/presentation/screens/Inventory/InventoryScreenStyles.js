import { StyleSheet } from "react-native";

const inventoryScreenStyles = StyleSheet.create({
    titleStyle:{
        fontWeight:'bold',
        fontSize: 24,

    },
    titleLineStyle:{
        width:'94%',
        paddingHorizontal: 30,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between'
    },
    buttonStyle:{
        backgroundColor:'#f5304d',//color of the plus button
        borderRadius:8,
        width:40,
        height:36,
        alignSelf:'flex-end',
        justifyContent:'center'
    },
    buttonText:{
        fontSize:32,
        fontWeight:'bold',
        color:'white',
        textAlign:'center'
    }
})

export default inventoryScreenStyles;