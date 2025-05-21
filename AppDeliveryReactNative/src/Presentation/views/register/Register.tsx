import React, { useEffect, useState } from 'react'
import { StackScreenProps } from "@react-navigation/stack";
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, Platform, ScrollView, Button, ToastAndroid, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import useViewModel from './ViewModel'
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles'
import { ModalPickImage } from '../../components/ModalPickImage';
import { RootStackParamList } from "../../../../App";
import { SaveUserLocalUseCase } from '../../../Domain/useCases/userLocal/SaveUserLocal';
import { useUserLocal } from '../../hooks/useUserLocal';
interface Props extends StackScreenProps<RootStackParamList,'ProfileInfoScreen'>{

}
export const RegisterScreen = ({navigation, route}:Props) => {

    const { name, lastname, email, phone, password, image, confirmPassword, onChange, register, pickImage, takePhoto, errorMessage } = useViewModel();
  const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        if (errorMessage != '') {
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
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                            {
                                image == '' ? <Image style={styles.logoImage} source={require('../../../../assets/user_image.png')} />
                                    : <Image style={styles.logoImage} source={{uri: image}} />
                            }

                        </TouchableOpacity>
                        <Text style={styles.logotext}>Selecciona una imagen</Text>
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.formText}>REGISTRATE</Text>

                        <CustomTextInput
                            image={require('../../../../assets/user.png')}
                            placeholder='Nombres'
                            keyboard='default'
                            property='name'
                            onChangeText={onChange}
                            value={name} />
                        <CustomTextInput
                            image={require('../../../../assets/my_user.png')}
                            placeholder='Apellidos'
                            keyboard='default'
                            property='lastname'
                            onChangeText={onChange}
                            value={lastname} />
                        <CustomTextInput
                            image={require('../../../../assets/phone.png')}
                            placeholder='Telefono'
                            keyboard='numeric'
                            property='phone'
                            onChangeText={onChange}
                            value={phone} />
                        <CustomTextInput
                            image={require('../../../../assets/email.png')}
                            placeholder='Correo electronico'
                            keyboard='default'
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
                            secureTextEntry={true}
                        />
                        <CustomTextInput
                            image={require('../../../../assets/confirm_password.png')}
                            placeholder='Confirmar contraseña'
                            keyboard='default'
                            property='confirmPassword'
                            onChangeText={onChange}
                            value={confirmPassword}
                            secureTextEntry={true}
                        />
                        <View style={{ marginTop: 30 }}>
                            <RoundedButton text='Registrarse' onPress={() =>

                                register()

                            } ></RoundedButton>

                        </View>
                    </View>
                   
                    <ModalPickImage
                     openGallery={pickImage}
                     openCamera={takePhoto}
                     modalUseSate={modalVisible}
                     setModalUseSate={setModalVisible}
                    >

                    </ModalPickImage>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

