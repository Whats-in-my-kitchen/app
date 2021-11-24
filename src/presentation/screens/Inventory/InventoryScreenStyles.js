import { StyleSheet } from "react-native";

const inventoryScreenStyles = StyleSheet.create({
    titleStyle:{
        fontWeight: 'bold',
        fontSize: 24,
    },
    titleLineStyle:{
        width: '94%',
        paddingHorizontal: 30,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between'
    },
    plusButtonStyle:{
        backgroundColor:'#f5304d',//color of the plus button
        borderRadius:8,
        width:40,
        height:36,
        alignSelf:'flex-end',
        justifyContent:'center'
    },
    inventoryButtonStyle:{
        backgroundColor:'#f5304d',//color of the inventory button
        borderRadius:8,
        height: 40,
        width: "100%",
        alignSelf:'stretch',
        justifyContent:'center',
        padding: 30,
    },
    plusButtonText:{
        fontSize:32,
        fontWeight:'bold',
        color:'white',
        textAlign:'center'
    },
    inventoryButtonText:{
        fontSize:20,
        fontWeight:'normal',
        color:'white',
        textAlign:'center'
    },

})

export default inventoryScreenStyles;


