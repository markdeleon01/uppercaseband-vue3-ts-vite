import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://my-json-server.typicode.com/markdeleon01/uppercaseband-vue3-ts-vite`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000 // throw error if API call takes longer than 10 seconds
})

export default {
  getReleases() {
    return apiClient.get('/discography')
  }
}
