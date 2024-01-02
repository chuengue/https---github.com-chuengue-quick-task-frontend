import { useEffect, useState } from 'react'
import { Surface, Typo } from '..'
import instance from '../../hooks/ConfigApi'
import { getOneTask } from '../../services/taskService/get'
import { TaskInterface } from '../../types/task.types'

interface TaskViewProps {
  taskId: null | string
}

const TaskView = ({ taskId }: TaskViewProps) => {
  const [taskItem, setTaskItem] = useState<undefined | TaskInterface>()

  const getTask = async (id: string) => {
    try {
      const task = await getOneTask(instance, { params: { id } })
      setTaskItem(task.results)
    } catch (erro) {
      console.error('Erro ao obter a tarefa:', erro)
    }
  }

  useEffect(() => {
    taskId && getTask(taskId)
  }, [taskId])

  return (
    <>
      <Surface>
        <Typo>{taskItem?.name}</Typo>
      </Surface>
    </>
  )
}

export default TaskView
