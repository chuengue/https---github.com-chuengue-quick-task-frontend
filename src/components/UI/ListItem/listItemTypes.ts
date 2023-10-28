import { ItemProps } from './Item'

export interface ListItemProps {
  items: ItemProps[] | undefined
  onClickItem: (id: string) => void
}
