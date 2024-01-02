import { useEffect, useState } from 'react'
import { ResponseTaskInterface } from '../types/task.types'
import instance from './ConfigApi'

export function useRequest(url: string, id?: string) {
  const [data, setData] = useState<ResponseTaskInterface>()
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    instance
      .get(id ? `${url}/${id}` : url)
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [url])

  return { data, error, isFetching }
}
