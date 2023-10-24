interface RoutineFrequency {
  startDate: string
  endDate: string
}
export interface TaskInterface {
  id: string
  name: string
  description: string
  date: string
  priority: 1 | 2 | 3 | 4
  isRoutine: boolean
  routineFrequency?: RoutineFrequency
  updatedAt?: string
  createdAt?: string
}
export interface ResponseTaskInterface {
  sucess: boolean
  results: TaskInterface[]
  totalItens: number
}
export interface SearchParams {
  argumentType: 'name' | 'description' | 'priority'
  argument: string
}
