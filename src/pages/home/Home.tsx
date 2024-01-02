import { useEffect, useState } from 'react'
import { ListItem, Wrapper } from '../../components'
import { TaskView } from '../../components/taskView'
import instance from '../../hooks/ConfigApi'
import { getAllTask } from '../../services/taskService/get'
import { TaskInterface } from '../../types/task.types'

const Home = () => {
  const [selectedTask, setSelectedTask] = useState<null | string>(null)
  const [tasksGroup, SetTasksGroup] = useState<undefined | TaskInterface[]>([])

  const getAllItems = async () => {
    try {
      const tasksList = await getAllTask(instance)
      SetTasksGroup(tasksList.results)
    } catch (erro) {
      console.error('Erro ao obter a tarefa:', erro)
    }
  }

  useEffect(() => {
    getAllItems()
  }, [])
  return (
    <Wrapper flexDirection="row" height="80vh" m={28}>
      <Wrapper width="400px" marginRight={28}>
        <ListItem
          hasAddNewTaskButton
          onClickItem={(e) => setSelectedTask(e)}
          items={tasksGroup}
        ></ListItem>
      </Wrapper>
      <TaskView taskId={selectedTask}></TaskView>
    </Wrapper>
  )
}

export default Home
