import { ResponseApiDelivery } from '../../Data/sources/remote/models/ResponseApiDelivery'
import{ User } from '../entities/User'

export interface AuthRespository{
    register(user: User): Promise<ResponseApiDelivery>
}