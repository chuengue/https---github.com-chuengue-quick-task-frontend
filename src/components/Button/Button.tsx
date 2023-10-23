import { FC } from 'react';
import { ButtonProps } from './ButtonTypes';
import { StyledButton } from './Button.styled';

const Button: FC<ButtonProps> = ({
  buttonSize = 'xl',
  color = 'primary',
  isRounded,
  isLoading = false,
  disabled = false,
  variant = 'contained',
  onClick,
  children,
}) => {
  enum buttonColors {
    primary = 'purple',
    secondary = 'yellow',
    gray = 'gray',
    orange = 'orange',
    destruction = 'red',
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
    >
      {children}
    </StyledButton>
  );
};
export default Button;
