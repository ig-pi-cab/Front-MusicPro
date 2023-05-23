import axios from 'axios'

const productApi = axios.create({
    baseURL: 'https://localhost:5001/api/Productos'

})
const webPayApi = axios.create({
    baseURL: 'https://localhost:5001/api/webpay'
})

export const getAllProducts = () => {return productApi.get('/')}
export const createProduct = (product) => { return productApi.post('/',product)}
export const getSingleProduct = (id) => {return productApi.get('/'+id)}
export const deleteProduct = (id) => {return productApi.delete('/'+id)}
export const updateProduct = (id,product) => {return productApi.put('/'+id,product)}

export const getDolar = () => {return axios.get('https://localhost:5001/api/Dolar')}

export const createWebPay = (monto) => {return webPayApi.get('/',monto)}
