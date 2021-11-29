import { StyleSheet } from "react-native";

const settingsScreenStyles = StyleSheet.create({
    titleStyle:{
        fontWeight: 'bold',
        fontSize: 24,
    },
    titleLineStyle:{
        width: '100%',
        paddingHorizontal: 30,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between'
    },
    settingsButtonStyle:{
        backgroundColor:'#f0efef',//color of the  button
        borderRadius:8,
        height: 40,
        width: "100%",
        alignSelf:'stretch',
        justifyContent:'center',
        padding: 30,
    },
    settingsButtonText:{
        fontSize:20,
        fontWeight:'normal',
        color:'black',
        textAlign:'center'
    },

})

export default settingsScreenStyles;


