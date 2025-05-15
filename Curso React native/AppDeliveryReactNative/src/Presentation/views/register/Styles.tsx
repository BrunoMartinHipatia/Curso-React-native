
import { StyleSheet } from "react-native";

const RegisterStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    ImageBackground: {
        width: "100%",
        height: "100%",
        opacity: 0.7,
        bottom: '30%'

    },
    form: {
        width: '100%',
        height: '70%',
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: "center",
        alignItems: "center",
        top: '5%'
    },
    logoImage: {
        width: 100,
        height: 100
    },
    logotext: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold'
    },
    formText: {
        fontWeight: "bold",
        fontSize: 16
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
        marginLeft: 15
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 30
    },
    formIcon: {
        width: 25,
        height: 25,
        marginTop: 10
    },
    formRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    },
    formRegisterText: {
        fontStyle: "italic",
        color: "orange",
        borderBottomWidth: 1,
        borderBottomColor: 'orange',
        fontWeight: 'bold',
        marginLeft: 10
    }
});

export default RegisterStyles;