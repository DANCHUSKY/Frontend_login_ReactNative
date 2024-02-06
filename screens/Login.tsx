// LoginScreen.tsx
import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import SensitiveInfo from 'react-native-sensitive-info';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const existingEmail = await SensitiveInfo.getItem('userEmail', {});
            if (existingEmail === email) {
                Alert.alert('Error de registro', 'Este correo electrónico ya está registrado. Por favor, usa otro.');
                return;
            }

            await SensitiveInfo.setItem('userEmail', email, {});
            await SensitiveInfo.setItem('userPassword', password, {});

            console.log('Registro exitoso. Ahora puedes iniciar sesión.');
            Alert.alert('Registro exitoso', 'Ahora puedes iniciar sesión.');
        } catch (error) {
            console.error('Error al registrar:', error);
            Alert.alert('Error', 'Hubo un problema durante el registro. Por favor, intenta de nuevo.');
        }
    };

    const handleLogin = async () => {
        try {
            const storedEmail = await SensitiveInfo.getItem('userEmail', {});
            const storedPassword = await SensitiveInfo.getItem('userPassword', {});

            if (email === storedEmail && password === storedPassword) {
                console.log('Inicio de sesión exitoso.');
                Alert.alert('Inicio de sesión exitoso', 'Bienvenido de nuevo.');
                navigation.navigate('Home');
            } else {
                console.log('Credenciales incorrectas. Por favor, intenta de nuevo.');
                Alert.alert('Error de inicio de sesión', 'Credenciales incorrectas. Por favor, intenta de nuevo.');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            Alert.alert('Error', 'Hubo un problema durante el inicio de sesión. Por favor, intenta de nuevo.');
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: '',
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: 'white',
        });
    }, [navigation]);

    return (
        <LinearGradient colors={['black', 'blue']} style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                <Text style={{ fontSize: 30, marginBottom: 20, color: 'white' }}>Iniciar sesión o registrarse</Text>
                <TextInput
                    style={{ width: '100%', height: 50, borderWidth: 2, borderColor: 'white', borderRadius: 20, marginBottom: 20, padding: 10, color: 'white' }}
                    placeholder="Correo electrónico"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <TextInput
                    style={{ width: '100%', height: 50, borderWidth: 2, borderColor: 'white', borderRadius: 20, marginBottom: 20, padding: 10, color: 'white' }}
                    placeholder="Contraseña"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                <Button title="Registrarse" onPress={handleRegister} />
                <Text style={{ color: 'white', marginBottom: 10, marginTop: 20 }}>¿Ya tienes una cuenta?</Text>
                <Button title="Iniciar sesión" onPress={handleLogin} />
            </View>
        </LinearGradient>
    );
};

export default LoginScreen;
