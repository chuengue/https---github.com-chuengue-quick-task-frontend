export interface ItemProps {
  id: string
  name: string
  description?: string
  isRoutine?: boolean
  priority?: number
  date?: string
  updatedAt?: string
  createdAt?: string
  routineFrequency?: {
    startDate: string
    endDate: string
  }
  onClick?: (id: string) => void
}
