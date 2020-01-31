import axios from 'axios'

const url = window.location

export default () => {
  const axiosInstance = axios.create({
    // baseURL: `${url.protocol}//${url.host}/api/v1/`
    // baseURL: `
    baseURL:
      process.env.NODE_ENV === 'development'
        ? `${url.protocol}//localhost:4001/api/v1/`
        : `${process.env.VUE_APP_URL}api/v1`
  })
  return axiosInstance
}
