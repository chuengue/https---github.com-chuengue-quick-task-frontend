import axios from 'axios'
import {
  ResponseTaskInterface,
  SearchParams,
  TaskInterface,
} from '../types/task.types'

const baseURL = 'http://localhost:9999'

export const createTask = async (payload: TaskInterface) => {
  const config = {
    headers: {
      accept: 'application/json',
    },
  }
  return await axios.post(`${baseURL}/create`, { payload }, config)
}

export const updateTask = async (id: string, payload: TaskInterface) => {
  const config = {
    headers: {
      accept: 'application/json',
    },
  }
  return await axios.put(`${baseURL}/task/${id}`, { payload }, config)
}

export const getById = async (id: string): Promise<ResponseTaskInterface> => {
  const config = {
    headers: {
      accept: 'application/json',
    },
  }
  const response = await axios.get(`${baseURL}/task/${id}`, config)
  return response.data as ResponseTaskInterface
}

export const deleteTask = async (id: string) => {
  const config = {
    headers: {
      accept: 'application/json',
    },
  }
  return await axios.delete(`${baseURL}/task/${id}`, config)
}

export const search = async ({
  argumentType,
  argument,
}: SearchParams): Promise<ResponseTaskInterface[]> => {
  const params = new URLSearchParams([[argumentType, argument]])
  const response = await axios.get(`${baseURL}/search`, { params })
  return response.data as ResponseTaskInterface[]
}
export const getAll = async (): Promise<ResponseTaskInterface[]> => {
  const config = {
    headers: {
      accept: 'application/json',
    },
  }
  const response = await axios.get(`${baseURL}/task`, config)
  return response.data as ResponseTaskInterface[]
}
