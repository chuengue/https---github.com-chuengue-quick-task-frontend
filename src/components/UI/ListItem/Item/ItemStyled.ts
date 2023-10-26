import styled from 'styled-components'
import { ItemProps } from '.'
import { Wrapper } from '../..'

const handlePriority = (props) => {
  const priority = props.priority
  switch (priority) {
    case 1:
      return props.theme.colors.red.default
    case 2:
      return props.theme.colors.orange.dark
    case 3:
      return props.theme.colors.blue.light
    case 4:
      return props.theme.colors.green.default
    default:
      return props.theme.colors.blue.semi
  }
}

export const WrapperItem = styled(Wrapper)<Partial<ItemProps>>`
  flex-direction: column;
  gap: 4px;
  margin: 8px 0 8px 8px;
  padding-left: 8px;
  transition: border-left 0.3s ease;
  &:hover {
    border-left: 12px solid ${(props) => handlePriority(props)};
  }
  border-left: 4px solid ${(props) => handlePriority(props)};
`
