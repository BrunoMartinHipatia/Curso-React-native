import axios from 'axios'
const ApiDelivery = axios.create({
    baseURL: 'http://172.17.106.186:3000/api',
    headers:{
        'Content-Type': 'application/json'
    }
})

export {ApiDelivery}