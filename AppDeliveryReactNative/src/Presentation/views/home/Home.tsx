import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, Platform, ScrollView, Button, ToastAndroid, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { StackNavigationState, useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel'
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles'

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'>{
    
}

export const HomeScreen = ({navigation, route}:Props) => {

   
    const { email, password, onChange, errorMessage, login, user } = useViewModel();



    useEffect(() => {
      if(errorMessage!==''){
        ToastAndroid.show(errorMessage, ToastAndroid.LONG)
      }
    }, [errorMessage])
    
    useEffect(() => {
      if(user?.id!==null && user?.id!==undefined){
        navigation.replace('ProfileInfoScreen')
      }
    }, [user])
    

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                    <Image style={styles.ImageBackground} source={require('../../../../assets/chef.jpg')} />
                    <View style={styles.logoContainer}>
                        <Image style={styles.logoImage} source={require('../../../../assets/logo.png')} />
                        <Text style={styles.logotext}>FOOD APP</Text>
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.formText}>INGRESAR</Text>
                        <CustomTextInput
                            image={require('../../../../assets/email.png')}
                            placeholder='Correo electronico'
                            keyboard='email-address'
                            property='email'
                            onChangeText={onChange}
                            value={email} />

                        <CustomTextInput
                            image={require('../../../../assets/password.png')}
                            placeholder='Contraseña'
                            keyboard='default'
                            property='password'
                            onChangeText={onChange}
                            value={password}
                            secureTextEntry={true} />
                    
                        <View style={{ marginTop: 30 }}>
                            <RoundedButton text='LOGIN' onPress={() => login()} ></RoundedButton>
                            <View style={styles.formRegister}>
                                <Text>No tienes cuenta?</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                                    <Text style={styles.formRegisterText}>Registrate</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

