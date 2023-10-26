import styled from 'styled-components'
import { Wrapper } from '..'
import Theme from '../../../theme/theme'

export const ListItemWrapper = styled(Wrapper)`
  flex-direction: column;
  background: ${Theme.colors.blue.semi};
  overflow: auto;
  max-height: 80vh;
  min-height: 20vh;
  width: 100%;
  border-radius: 8px;
  padding: 8px;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    margin: 10px 0;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${Theme.colors.blue.default};
    border-radius: 4px;
  }
`
