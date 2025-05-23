import{ AuthRepository } from '../../Domain/repositories/AuthRepository'
import{ User } from '../../Domain/entities/User'
import { ApiDelivery, ApiDeliveryForImage } from '../sources/remote/api/ApiDelivery';
import { ResponseApiDelivery } from '../sources/remote/models/ResponseApiDelivery';
import { AxiosError } from 'axios';
import * as ImagePicker from 'expo-image-picker';
import mime from 'mime'
export class AuthRepositoryImpl implements AuthRepository {
async register(user: User) : Promise<ResponseApiDelivery>{
        try {
            const response = await ApiDelivery.post<ResponseApiDelivery>('/users/create', user)
          
            return Promise.resolve(response.data)
        } catch (error) {
            let e = (error as AxiosError);
            console.log("ERROR: "+JSON.stringify(e.response?.data));
            const apiError: ResponseApiDelivery= JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError)
            
        }
    }
        async registerWithImage(user: User, file: ImagePicker.ImagePickerAsset): Promise<ResponseApiDelivery> {
  try {
    const data = new FormData();



    data.append('image', {
      uri: file.uri,
      name: file.uri.split('/').pop() || 'image.jpg',
      type: mime.getType(file.uri) || 'image/jpeg',
    } as any); 
    data.append('user', JSON.stringify(user))
const response = await ApiDeliveryForImage.post<ResponseApiDelivery>('/users/createWithImage', data);


    return Promise.resolve(response.data);

  } catch (error) {
    const e = error as AxiosError;
    console.log("ERROR: " + JSON.stringify(e.response?.data));
    const apiError: ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data));
    return Promise.resolve(apiError);
  }
}
     async login(email: string, password: string) : Promise<ResponseApiDelivery>{
        try {
            const response = await ApiDelivery.post<ResponseApiDelivery>('/users/login', {
                email: email,
                password: password
            });
          
            return Promise.resolve(response.data)
        } catch (error) {
            let e = (error as AxiosError);
            console.log("ERROR: "+JSON.stringify(e.response?.data));
            const apiError: ResponseApiDelivery= JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError)
            
        }
     }
    }