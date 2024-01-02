import { AxiosInstance } from 'axios'
import {
  ResponseTaskInterface,
  ResponseTaskOneInterface,
} from '../../types/task.types'

export type ApiType = AxiosInstance

export const getAllTask = async (
  api: ApiType,
): Promise<ResponseTaskInterface> => {
  const response = await api.get<ResponseTaskInterface>('/task')
  console.log(response)
  return response?.data
}

export const getOneTask = async (
  api: ApiType,
  { params }: { params: GetOneTaskParams },
): Promise<ResponseTaskOneInterface> => {
  const response = await api.get<ResponseTaskOneInterface>(`/task/${params.id}`)
  return response?.data
}
