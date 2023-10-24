import styled from 'styled-components'
import { layout } from 'styled-system'
import { Wrapper } from '..'
import Theme from '../../theme/theme'

export const StyledInput = styled.input`
  background-color: ${Theme.colors.primary};
  border: none;
  color: white;
  outline: none;
  min-height: 32px;
  width: 100%;
  margin: 0 8px 0 8px;

  &:focus {
    outline: none;
  }
  ${layout}
`
export const InputWrapper = styled(Wrapper)`
  width: 100%;
  border: 1px solid ${Theme.colors.blue.default};
`
