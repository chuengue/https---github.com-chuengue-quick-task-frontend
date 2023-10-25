import { useQuery } from 'react-query'
import { Input, TextArea, Wrapper } from '../../components'
import ConfigApi from '../../hooks/ConfigApi'
import { ResponseTaskInterface } from '../../types/task.types'

const Home = () => {
  const { data } = useQuery<ResponseTaskInterface>('tasks', async () => {
    const response = await ConfigApi('http://localhost:9999').get('/task')
    return response.data
  })
  const handleChange = (e) => {
    const inputValue = e.target.value
    console.log(inputValue.length)
  }
  return (
    <>
      <Wrapper width="30%" m={20}>
        <Input label="Teste" onChange={(e) => handleChange(e)}></Input>
      </Wrapper>
      <Wrapper width="30%" m={20}>
        <TextArea
          height="400px"
          label="textArea"
          onChange={(e) => handleChange(e)}
        ></TextArea>
      </Wrapper>
    </>
  )
}

export default Home
