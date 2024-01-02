// Importe a biblioteca Axios
import axios from 'axios'
const baseURL = 'http://localhost:9999'

// Crie uma instância do Axios com configurações opcionais
const instance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default instance
