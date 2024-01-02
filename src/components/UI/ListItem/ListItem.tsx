import { FC, useState } from 'react'
import { IoFileTrayOutline } from 'react-icons/io5'

import { MdFormatListBulletedAdd } from 'react-icons/md'
import { ListItemProps } from '.'
import { Button, Input, Surface, Typo, Wrapper } from '..'
import Item, { ItemProps } from './Item'

const ListItem: FC<ListItemProps> = ({
  items,
  onClickItem,
  hasAddNewTaskButton = false,
}) => {
  console.log(items)
  const [searchText, setSearchText] = useState('')
  const filteredItems = items?.filter((item) => {
    const itemName = item.name.toLowerCase().trim()
    const search = searchText.toLowerCase().trim()

    return itemName.includes(search)
  })

  return (
    <>
      <Surface flexDirection="column">
        {filteredItems?.length ? (
          <>
            <Wrapper flexDirection="column" gap="8px" mb={12} mt={6}>
              <Typo fontWeight={200} color="white">
                TAREFAS
              </Typo>
              <Input
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                label="Buscar"
              ></Input>
            </Wrapper>
            {hasAddNewTaskButton && (
              <Wrapper margin={8}>
                <Button buttonSize="md">
                  <MdFormatListBulletedAdd color="white" size="28" />
                </Button>
              </Wrapper>
            )}
            <Surface flexDirection="column" width="100%">
              {filteredItems.map((item: ItemProps, index: number) => (
                <div key={index} style={{ margin: '2px 0px' }}>
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
            </Surface>
          </>
        ) : (
          <Wrapper
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <IoFileTrayOutline color="#2b3459" size="68" />
            <Typo color="gray" fontSize="24px">
              Você não tem tarefas.
            </Typo>
          </Wrapper>
        )}
      </Surface>
    </>
  )
}

export default ListItem
