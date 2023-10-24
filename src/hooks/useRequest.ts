import { useEffect, useState } from 'react'
import ConfigApi from './ConfigApi'

export function useRequest<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const api = ConfigApi('http://localhost:9999')
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    api
      .get(url)
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
