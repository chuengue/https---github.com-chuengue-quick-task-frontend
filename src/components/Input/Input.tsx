import { FC } from 'react'
import { Typo } from '..'
import { InputWrapper, StyledInput } from './InputStyled'
import { InputProps } from './InputTypes'

const Input: FC<InputProps> = ({ disabled = false, label, onChange }) => {
  return (
    <>
      <InputWrapper>
        <Typo variant="subtitle" color="gray">
          {label}
        </Typo>

        <StyledInput
          disabled={disabled}
          onChange={(target) => onChange(target)}
        ></StyledInput>
      </InputWrapper>
    </>
  )
}
export default Input
