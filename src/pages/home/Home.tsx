import { useQuery } from 'react-query'
import { Input, Wrapper } from '../../components'
import ConfigApi from '../../hooks/ConfigApi'
import { ResponseTaskInterface } from '../../types/task.types'

const Home = () => {
  const { data } = useQuery<ResponseTaskInterface>('tasks', async () => {
    const response = await ConfigApi('http://localhost:9999').get('/task')
    return response.data
  })
  const handleChange = (e) => {
    console.log(e.target.value)
  }
  return (
    <>
      <Wrapper width="30%">
        <Input label="Teste" onChange={(e) => handleChange(e)}></Input>
      </Wrapper>
    </>
  )
}

export default Home
