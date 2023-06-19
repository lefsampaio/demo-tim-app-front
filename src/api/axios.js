import axios from 'axios'

const api = axios.create({
  baseURL: `https://ntt-csc.azurewebsites.net/`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default api
