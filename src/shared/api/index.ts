import axios, {
  AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios'
import config from '@/app/configs'

const onRequest = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  return config
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response
}

const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
  if (axios.isAxiosError(error)) {
    const { status } = (error.response as AxiosResponse) ?? {}

    if (status === 401) {
      console.log('Status 401')
    }

    switch (status) {
      case 400: {
        // "Bad Request"
        break
      }
      case 401: {
        // "Login required"
        console.log('Status 401')
        break
      }
      case 403: {
        // "Permission denied"
        break
      }
      case 404: {
        // "Invalid request"
        break
      }
      case 500: {
        // "Server error"
        break
      }
      default: {
        // "Unknown error occurred"
        break
      }
    }
  }
  return Promise.reject(error)
}

const baseApi = axios.create({
  baseURL: config.baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})

baseApi.interceptors.request.use(onRequest, onErrorResponse)

baseApi.interceptors.response.use(onResponse, onErrorResponse)

export { baseApi }
