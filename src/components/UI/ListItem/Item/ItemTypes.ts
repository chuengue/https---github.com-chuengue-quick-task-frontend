export interface ItemProps {
  id: string
  name: string
  description: string
  isRoutine: boolean
  priority: number
  date: string
  onClick?: (id: string) => void
}
