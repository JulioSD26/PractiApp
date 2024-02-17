import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native'
import React, { useState } from 'react'

// CONEXION A BD
import appFirebase from '../credenciales'
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(appFirebase)


export default function Login(props) {

    // creamos la variable de estado
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const logueo = async() => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            Alert.alert('Iniciando sesión', 'Accediendo...')
            props.navigation.navigate('Home')
        } catch (error) {
            console.log(error);
            Alert.alert('Error', 'El usuario o la contraseña son incorrectos')
        }
    }


    return (
        <View style={styles.padre}>
            <View>
                <Text>Iniciar Sesión</Text>
            </View>
            <View>
                <Text>Bienvenido de vuelta</Text>
            </View>
            <View style={styles.tarjeta}>
                <View style={styles.cajaTexto}>
                    <TextInput placeholder='correo' style={{paddingHorizontal:15}} 
                    onChangeText={(text)=>setEmail(text)}/>
                </View>
                <View style={styles.cajaTexto}>
                    <TextInput placeholder='Contraseña' style={{paddingHorizontal:15}} secureTextEntry={true}
                    onChangeText={(text)=>setPassword(text)} />
                </View>
                <View style={styles.PadreBoton}>
                    <TouchableOpacity style={styles.cajaBoton} onPress={logueo}>
                        <Text style={styles.textoBoton}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>¿Olvidaste la contraseña?</Text>
                </View>
            </View>
            <Text>¿No tienes cuenta? Registrate</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    padre:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    profile:{
        width:100,
        height:100,
        borderRadius:50,
        borderColor:'white'
    },
    tarjeta:{
        margin:20,
        backgroundColor:'white',
        borderRadius:20,
        width:'90%',
        padding: '20%',
        shadowColor:'#000',
        shadowOffset: {
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,
        
    },
    cajaTexto:{
        paddingVertical:20,
        backgroundColor: '#cccccc40',
        borderRadius:30,
        marginVertical:10
    },
    PadreBoton:{
        alignItems:'center',
    },
    cajaBoton:{
        backgroundColor:'#525FE1',
        borderRadius:30,
        paddingVertical:20,
        width:150,
        marginTop:20
    },
    textoBoton:{
        textAlign:'center',
        color:'white'
    }
})