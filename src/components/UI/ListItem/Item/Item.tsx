import { FC } from 'react'
import { ItemProps } from '.'
import { Typo } from '../..'
import { WrapperItem } from './ItemStyled'

const Item: FC<ItemProps> = ({
  id,
  name,
  description,
  isRoutine,
  priority,
  date,
  onClick,
}) => {
  return (
    <>
      <WrapperItem
        cursor="pointer"
        priority={priority}
        onClick={() => {
          onClick && onClick(id)
        }}
      >
        <Typo fontWeight={300}>{name}</Typo>
        <Typo variant="subtitle" fontWeight="300">
          {description}
        </Typo>
      </WrapperItem>
    </>
  )
}

export default Item
