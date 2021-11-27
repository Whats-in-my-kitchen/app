import { StyleSheet } from "react-native";

const shoppingListStyles = StyleSheet.create({
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
        backgroundColor:'#f5304d',//color of the inventory button
        borderRadius:8,
        height: 40,
        width: "100%",
        alignSelf:'stretch',
        justifyContent:'center',
        padding: 30,
    },
    buttonText:{
        fontSize:20,
        fontWeight:'normal',
        color:'white',
        textAlign:'center'
    },
})

export default shoppingListStyles;