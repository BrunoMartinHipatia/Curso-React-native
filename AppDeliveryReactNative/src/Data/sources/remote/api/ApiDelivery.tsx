import axios from 'axios'
const ApiDelivery = axios.create({
    baseURL: 'http://192.168.1.43:3000/api',
    headers:{
        'Content-Type': 'application/json'
    }
})
const ApiDeliveryForImage = axios.create({
    baseURL: 'http://192.168.1.43:3000/api',
    headers: {
        'Content-type': 'multipart/form-data',
        'accept': 'application/json',
    }
})

export {ApiDelivery, ApiDeliveryForImage}