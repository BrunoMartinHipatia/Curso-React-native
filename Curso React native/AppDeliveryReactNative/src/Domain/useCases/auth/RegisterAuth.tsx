import { AuthRespositoryImpl } from "../../../Data/repositories/AuthRepository";
import { User } from "../../entities/User";
const {register} = new AuthRespositoryImpl();
export const RegisterAuthUseCase= async(user: User)=>{
    return await register(user)
}