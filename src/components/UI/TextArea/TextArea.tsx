import { FC, useState } from 'react'
import { Typo, Wrapper } from '../..'
import {
  StyledTextArea,
  StyledTypoWrapper,
  TextAreaWrapper,
} from './TextAreaStyled'
import { TextAreaProps } from './TextAreaTypes'

const TextArea: FC<TextAreaProps> = ({
  disabled = false,
  label,
  onChange,
  value,
  maxLenght = 255,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState<string>(value || '')

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value
    setInputValue(value)
    onChange(event)
  }

  return (
    <>
      <TextAreaWrapper>
        <StyledTypoWrapper>
          <Typo variant="subtitle" color="gray">
            {label}
          </Typo>
        </StyledTypoWrapper>
        <StyledTextArea
          disabled={disabled}
          maxLength={maxLenght}
          value={inputValue}
          onChange={(event) => handleInputChange(event)}
          placeholder={'Escreva aqui...'}
          {...rest}
        />
        <Wrapper mx={16} mb={8} flexDirection="row-reverse">
          <Typo variant="subtitle" color="gray">
            {inputValue.length + '/' + maxLenght}
          </Typo>
        </Wrapper>
      </TextAreaWrapper>
    </>
  )
}

export default TextArea
