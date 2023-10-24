import axios from 'axios'

function ConfigApi(baseURL: string) {
  const api = axios.create({
    baseURL,
    headers: {
      accept: 'application/json',
    },
  })
  return api
}

export default ConfigApi
