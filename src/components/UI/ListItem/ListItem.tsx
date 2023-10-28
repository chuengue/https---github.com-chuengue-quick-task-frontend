import { FC, useState } from 'react'
import { ListItemProps } from '.'
import { Input, Typo, Wrapper } from '..'
import Item, { ItemProps } from './Item'
import { ListItemWrapper } from './ListItemStyled'

const ListItem: FC<ListItemProps> = ({ items, onClickItem }) => {
  console.log(items)
  const [searchText, setSearchText] = useState('')
  const filteredItems = items?.filter((item) => {
    const itemName = item.name.toLowerCase().trim()
    const search = searchText.toLowerCase().trim()

    return itemName.includes(search)
  })

  return (
    <>
      {filteredItems && (
        <ListItemWrapper>
          <Wrapper ml={8} mt={2} mb={4}>
            <Typo fontWeight={200} color="white">
              TAREFAS
            </Typo>
          </Wrapper>
          <Wrapper gap="8px" mb={12} ml={8}>
            <Input
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              label="Buscar"
            ></Input>
          </Wrapper>
          <Wrapper borderBottom="1px solid #2b3459" mx={8} />

          {filteredItems.map((item: ItemProps, index: number) => (
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
              {index < filteredItems.length - 1 && (
                <Wrapper borderBottom="1px solid #2b3459" mx={8} />
              )}
            </div>
          ))}
        </ListItemWrapper>
      )}
    </>
  )
}

export default ListItem
