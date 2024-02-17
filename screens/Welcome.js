import React, { useState, useEffect } from 'react';
import { View, Image, Button, Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

const WelcomeScreen = ({ navigation }) => {
    // cargar las fuentes
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        if (!fontsLoaded) {
            loadFonts();
        }
    });

    const loadFonts = async() => {
        await Font.loadAsync({
            'Montserrat': require('../assets/fonts/Montserrat-VariableFont_wght.ttf'),
        });

        setFontsLoaded(true);
    }

  const [continuePressed, setContinuePressed] = useState(false);

  const handleContinue = () => {
    setContinuePressed(true);
    navigation.navigate('Login'); // Navegar a la pantalla de inicio de sesión al presionar el botón
  };
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#013396" }}>
        <Image
          source={require('../assets/image5.png')}
          style={{ width: 200, height: 200 }}
        />
        <Text style={styles.Practicas}>Practicas Unison</Text>

        <Button title="Continuar" onPress={handleContinue} />
      </View>
    );
};

const styles = StyleSheet.create({
    Practicas: {
        color: '#FFFFFF',
        fontSize: 30,
        padding: 10,
        paddingBottom:20,
        fontFamily: 'Montserrat'

    }
})

export default WelcomeScreen;
