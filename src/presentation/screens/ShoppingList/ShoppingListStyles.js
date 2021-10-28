import { StyleSheet } from "react-native";

const shoppingListStyles = StyleSheet.create({
    titleStyle:{
        fontWeight:'bold',
        fontSize: 24,

    },
    titleLineStyle:{
        //backgroundColor:'maroon',
        marginTop:10,
        paddingVertical:10,
        paddingHorizontal: 30,
        flexDirection:"row",
        alignItems:'center'
    },
    buttonStyle:{
        backgroundColor:'#f5304d',//color of the plus button
        borderRadius:8,
        width:40,
        marginStart:'60%'
    },
    buttonText:{
        fontSize:32,
        fontWeight:'bold',
        color:'white',
        textAlign:'center'
    }
})

export default shoppingListStyles;