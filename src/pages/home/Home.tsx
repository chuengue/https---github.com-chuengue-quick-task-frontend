import { useQuery } from 'react-query'
import { ListItem, Wrapper } from '../../components'
import { TaskView } from '../../components/taskView'
import ConfigApi from '../../hooks/ConfigApi'
import { ResponseTaskInterface } from '../../types/task.types'

const Home = () => {
  const { data } = useQuery<ResponseTaskInterface>('tasks', async () => {
    const response = await ConfigApi('http://localhost:9999').get('/task')
    console.log(response)
    return response.data
  })
  console.log(data)
  return (
    <Wrapper flexDirection="row" height="80vh" m={28}>
      <Wrapper width="400px" marginRight={28}>
        <ListItem
          hasAddNewTaskButton
          onClickItem={(e) => console.log(e)}
          items={data?.results}
        ></ListItem>
      </Wrapper>
      <TaskView></TaskView>
    </Wrapper>
  )
}

export default Home
