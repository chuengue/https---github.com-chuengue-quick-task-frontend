import { useQuery } from 'react-query'
import { TextArea } from '../../components'
import ConfigApi from '../../hooks/ConfigApi'
import { ResponseTaskInterface } from '../../types/task.types'

const Home = () => {
  const { data } = useQuery<ResponseTaskInterface>('tasks', async () => {
    const response = await ConfigApi('http://localhost:9999').get('/task')
    return response.data
  })

  return (
    <>
      <TextArea
        label="Nome"
        onChange={(e) => {
          console.log(e)
        }}
      ></TextArea>
    </>
  )
}

export default Home
