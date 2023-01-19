/**
 * Axios Interceptor module
 * Intercepts requests responding with status code 401
 * tries to refresh/renew access_token
 * and finally retry original requests
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

import axios from 'axios'
import { getToken } from './token-service'
import { AsyncStorage } from 'react-native';
import { API_AUTH_URL } from '@env';

const axiosApiInstance = axios.create()

axiosApiInstance.interceptors.request.use(
  (config) => {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axiosApiInstance.interceptors.response.use(
  function (response) {
    return response
  },
  async function (error) {
    const originalRequest = error.config
    // Check if retry request is original request and is not requesting to the refresh enpoint
    // Avoiding infinite loop
    if (
      error.request.status === 403 &&
      !originalRequest._retry &&
      error.config.url !== String(API_AUTH_URL)
    ) {
      originalRequest._retry = true
      const token = await getToken()

      

      await AsyncStorage.setItem('shl_scores_access_token', token)

      error.config.headers.Authorization = 'Bearer ' + token
      error.config.headers['Content-Type'] = 'application/json'

      return axiosApiInstance(originalRequest)
    } 
    // If refresh failure, return error
    console.log(error)
    return Promise.reject(error)
  }
)

export default axiosApiInstance