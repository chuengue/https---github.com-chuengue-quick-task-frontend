import { ItemProps } from './Item'

export interface ListItemProps {
  items: ItemProps[]
  onClickItem: (id: string) => void
}
