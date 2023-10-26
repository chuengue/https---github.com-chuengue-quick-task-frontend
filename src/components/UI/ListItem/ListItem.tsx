import { FC } from 'react'
import { ListItemProps } from '.'
import { Button, Input, Typo, Wrapper } from '..'
import Item, { ItemProps } from './Item'
import { ListItemWrapper } from './ListItemStyled'

const ListItem: FC<ListItemProps> = ({ items, onClickItem }) => {
  return (
    <>
      <ListItemWrapper>
        <Wrapper ml={8} mt={2} mb={4}>
          <Typo fontWeight={200} color="white">
            TAREFAS
          </Typo>
        </Wrapper>
        <Wrapper gap="8px" mb={12} ml={8}>
          <Input onChange={() => {}} label="Buscar"></Input>
          <Button buttonSize="sm" color="orange">
            Go!
          </Button>
        </Wrapper>
        <Wrapper borderBottom="1px solid #2b3459" mx={8} />

        {items.map((item: ItemProps, index: number) => (
          <div key={index}>
            <Item
              name={item.name}
              description={item.description}
              priority={item.priority}
              date={item.date}
              id={item.id}
              isRoutine={item.isRoutine}
              onClick={() => onClickItem(item.id)}
            />
            {index < items.length - 1 && (
              <Wrapper borderBottom="1px solid #2b3459" mx={8} />
            )}
          </div>
        ))}
      </ListItemWrapper>
    </>
  )
}

export default ListItem
