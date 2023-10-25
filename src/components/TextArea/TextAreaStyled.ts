import styled, { css } from 'styled-components'
import { layout } from 'styled-system'
import { Wrapper } from '..'
import Theme from '../../theme/theme'
import { TextAreaProps } from './TextAreaTypes'

export const StyledTextArea = styled.textarea<Partial<TextAreaProps>>`
  background-color: ${Theme.colors.primary};
  font-family: 'roboto', Times, serif;
  border: none;
  color: white;
  outline: none;
  border-radius: 8px;
  padding: 16px;
  resize: none;

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
export const TextAreaWrapper = styled(Wrapper)`
  width: 100%;
  border: 1px solid ${Theme.colors.blue.default};
  flex-direction: column;
  border-radius: 8px;
`
export const StyledTypoWrapper = styled(Wrapper)`
  position: absolute;
  background-color: ${Theme.colors.primary};
  margin-top: -8px;
  margin-left: 44px;
  justify-content: center;
  align-items: center;
  width: 50px;
`
