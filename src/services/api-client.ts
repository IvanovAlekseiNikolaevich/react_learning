import axios, { type AxiosRequestConfig } from 'axios'

export interface FetchResponse<T> {
  count: number
  results: T[]
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '3f14ca540c3941bb99815488d2249aa4'
  }
})

class APIClient<T> {
  endpoint: string

  constructor (endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = async (config: AxiosRequestConfig) => {
    return await axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data)
  }
}

export default APIClient
