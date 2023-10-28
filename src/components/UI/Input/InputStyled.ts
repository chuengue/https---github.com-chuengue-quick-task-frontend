import styled, { css } from 'styled-components'
import { layout } from 'styled-system'
import { Wrapper } from '..'
import Theme from '../../../theme/theme'
import { InputProps } from './InputTypes'

export const StyledInput = styled.input<Partial<InputProps>>`
  background-color: ${Theme.colors.primary};
  border: none;
  color: white;
  outline: none;
  min-height: 32px;
  width: 100%;
  border-radius: 8px;
  padding: 0 16px;

  &:focus {
    outline: none;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${Theme.colors.gray[300]};
      &::placeholder {
        color: ${Theme.colors.gray.default};
      }
    `}

  ${layout}
`
export const InputWrapper = styled(Wrapper)`
  width: 100%;
  background-color: ${Theme.colors.primary};

  border: 1px solid ${Theme.colors.blue.default};
  border-radius: 8px;
`
export const StyledTypoWrapper = styled(Wrapper)`
  position: absolute;
  margin-top: -4px;
  margin-left: 4px;
  justify-content: center;
  align-items: center;
  width: 50px;
  transition: opacity 0.2s ease-in-out;
`
