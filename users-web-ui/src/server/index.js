import axios from 'axios'
const baseServerUrl = 'http://localhost:3001'

const instance = axios.create({
  baseURL: baseServerUrl
})

export const httpRequestDictionary = {
  users: '/user'
}

export default instance