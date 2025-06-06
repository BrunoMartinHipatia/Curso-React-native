import React, {useState} from 'react'
import { ApiDelivery } from '../../../Data/sources/remote/api/ApiDelivery'
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth'
import { RegisterWithImageAuthUseCase } from '../../../Domain/useCases/auth/RegisterWithImageAuth';
import * as ImagePicker from 'expo-image-picker';

export const RegisterViewModel = () => {
   const [errorMessage, setErrorMessage] = useState('')
   const [values, setValues] = useState({
    name: '',
    lastname:'',
    phone:'',
    email: '',
    password:'',
    confirmPassword:'',
    image:''
   })
const [file, setFile] = useState<null | ImagePicker.ImagePickerAsset>();


  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      const selectedAsset = result.assets[0];
      setFile(selectedAsset);
      onChange('image', selectedAsset.uri);
    }
  };
    const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      const selectedAsset = result.assets[0];
      setFile(selectedAsset);
      onChange('image', selectedAsset.uri);
    }
  };

   const onChange =(property: string, value: any)=>{
    setValues({
        ...values,[property]: value});
   }
  const register = async()=> {
    if(isValidForm()){
     //  const response =  await RegisterAuthUseCase(values)
     const response = await RegisterWithImageAuthUseCase(values, file!)
    console.log("RESULT: "+ JSON.stringify(response));

    }
   
    
  }
  const isValidForm  = ():boolean=>{
    if(values.name===''){
      setErrorMessage('Ingresa tu nombre')
      return false;
    } 
    if(values.lastname===''){
      setErrorMessage('Ingresa tu apellido')
      return false;
    }
    if(values.email===''){
      setErrorMessage('Ingresa tu email')
      return false;
    }
    if(values.phone===''){
      setErrorMessage('Ingresa tu teléfono')
      return false;
    }
    if(values.password===''){
      setErrorMessage('Ingresa tu contraseña')
      return false;
    }
    if(values.confirmPassword===''){
      setErrorMessage('Confirma tu contraseña')
      return false;
    }
    if(values.password!==values.confirmPassword){
         setErrorMessage('Las contraseñas no coinciden')
      return false;
    }
    if(values.image===''){
         setErrorMessage('Selecciona una imagen')
      return false;
    }
    return true;
  }
  return{ 
    ...values,
    onChange,
    register,
    pickImage,
    takePhoto,
    errorMessage
  }
}

export default RegisterViewModel