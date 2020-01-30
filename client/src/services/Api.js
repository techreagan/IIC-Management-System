import axios from 'axios'

const url = window.location

export default () => {
  const axiosInstance = axios.create({
    // baseURL: `${url.protocol}//${url.host}/api/v1/`
    baseURL: `${url.protocol}//localhost:4001/api/v1/`
  })
  return axiosInstance
}
