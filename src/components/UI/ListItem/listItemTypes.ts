import { ItemProps } from './Item'

export interface ListItemProps {
  items: ItemProps[] | undefined
  hasAddNewTaskButton?: boolean
  onClickItem: (id: string) => void
}
