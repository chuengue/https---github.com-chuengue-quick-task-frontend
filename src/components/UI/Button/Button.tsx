import { FC } from 'react'
import { StyledButton } from './ButtonStyled'
import { ButtonProps } from './ButtonTypes'

const Button: FC<ButtonProps> = ({
  buttonSize = 'xl',
  color = 'primary',
  isRounded,
  isLoading = false,
  disabled = false,
  variant = 'contained',
  onClick,
  children,
  ...rest
}) => {
  enum buttonColors {
    primary = 'blue',
    secondary = 'prussian',
    gray = 'gray',
    orange = 'orange',
    destruction = 'red',
    white = 'white',
  }
  return (
    <StyledButton
      disabled={disabled}
      buttonSize={buttonSize}
      color={buttonColors[color]}
      isLoading={isLoading}
      isRounded={isRounded}
      variant={variant}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}
export default Button
