import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://demo-api-vue.sanbercloud.com/api/v2'
})

export default instance
