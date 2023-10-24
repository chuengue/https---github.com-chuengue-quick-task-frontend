import { useQuery } from 'react-query'
import ConfigApi from '../../hooks/ConfigApi'
import { ResponseTaskInterface } from '../../types/task.types'

const Home = () => {
  const { data } = useQuery<ResponseTaskInterface>('tasks', async () => {
    const response = await ConfigApi('http://localhost:9999').get('/task')
    return response.data
  })
  return <></>
}

export default Home
