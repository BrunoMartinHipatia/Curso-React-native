import React, { useEffect, useState } from 'react'
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth'
import { SaveUserLocalUseCase } from '../../../Domain/useCases/userLocal/SaveUserLocal'
import { GetUserLocalUseCase } from '../../../Domain/useCases/userLocal/GetUserLocal'
import { useUserLocal } from '../../hooks/useUserLocal'


export const HomeViewModel = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const {user, getUserSession} = useUserLocal();
  console.log('USUARIO DE SESION: '+JSON.stringify(user));
  
  const [errorMessage, setErrorMessage] = useState('')
  const onChange = (property: string, value: any) => {
    setValues({
      ...values, [property]: value
    });
  }

  const login = async () => {

    if (isValidForm()) {
      const response = await LoginAuthUseCase(values.email, values.password)
      console.log('RESPONSE mio', JSON.stringify(response))
      if (!response.success) {
        setErrorMessage(response.message)
      } else {
        await SaveUserLocalUseCase(response.data)
        getUserSession();
      }
    }

  }

  const isValidForm = (): boolean => {
    if (values.email === '') {
      setErrorMessage('ingresa el correo electronico')
      return false;

    }

    if (values.password === '') {
      setErrorMessage('ingresa la contraseña')
      return false;

    }
    return true
  }


  return {
    ...values,user,
    onChange, errorMessage, login
  }
}

export default HomeViewModel