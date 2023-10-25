import { FC, useState } from 'react'
import { Typo, Wrapper } from '..'
import { InputWrapper, StyledInput, StyledTypoWrapper } from './InputStyled'
import { InputProps } from './InputTypes'

const Input: FC<InputProps> = ({
  disabled = false,
  label,
  onChange,
  value,
}) => {
  const [onFocusInput, setOnfocusInput] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>(value || '')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setInputValue(value)
    onChange(event)
  }
  const isTypoVisible = onFocusInput || inputValue
  const clearInput = () => {
    setInputValue('')
  }
  return (
    <>
      <InputWrapper>
        <StyledTypoWrapper
          style={{
            opacity: isTypoVisible ? 1 : 0,
          }}
        >
          <Typo variant="subtitle" color="gray">
            {label}
          </Typo>
        </StyledTypoWrapper>
        <StyledInput
          disabled={disabled}
          onChange={(event) => handleInputChange(event)}
          placeholder={!onFocusInput ? label : ''}
          onFocus={() => {
            setOnfocusInput(true)
          }}
          value={inputValue}
          onBlur={() => {
            setOnfocusInput(false)
          }}
        />
        {isTypoVisible && (
          <Wrapper
            width={20}
            color="#fff5"
            justifyContent="center"
            alignItems="center"
            mr={12}
            onClick={clearInput}
            cursor="pointer"
          >
            X
          </Wrapper>
        )}
      </InputWrapper>
    </>
  )
}

export default Input
