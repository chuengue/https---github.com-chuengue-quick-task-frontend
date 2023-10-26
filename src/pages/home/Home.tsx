import { useQuery } from 'react-query'
import { ListItem, Wrapper } from '../../components'
import ConfigApi from '../../hooks/ConfigApi'
import { ResponseTaskInterface } from '../../types/task.types'

const Home = () => {
  const teste = [
    {
      id: 'e16e1fef-a79e-4548-8d42-5a9e3da942a1',
      name: 'comprar comida',
      description: 'Arrumar dois comodos',
      date: '2023-10-23T00:00:00.000Z',
      priority: 1,
      isRoutine: true,
    },
    {
      id: 'e16e1fef-a79e-4548-8d42-5a9e3da942a2',
      name: 'comprar comida',
      description: 'Arrumar dois comodos',
      date: '2023-10-23T00:00:00.000Z',
      priority: 2,
      isRoutine: true,
    },
    {
      id: 'e16e1fef-a79e-4548-8d42-5a9e3da942a3',
      name: 'comprar comida',
      description: 'Arrumar dois comodos',
      date: '2023-10-23T00:00:00.000Z',
      priority: 4,
      isRoutine: true,
    },
    {
      id: 'e16e1fef-a79e-4548-8d42-5a9e3da942a4',
      name: 'comprar comida',
      description: 'Arrumar dois comodos',
      date: '2023-10-23T00:00:00.000Z',
      priority: 3,
      isRoutine: true,
    },
  ]
  const { data } = useQuery<ResponseTaskInterface>('tasks', async () => {
    const response = await ConfigApi('http://localhost:9999').get('/task')
    return response.data
  })

  return (
    <>
      <Wrapper width="400px">
        <ListItem onClickItem={(e) => console.log(e)} items={teste}></ListItem>
      </Wrapper>
    </>
  )
}

export default Home
