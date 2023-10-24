import {
  ColorProps,
  FlexboxProps,
  MarginProps,
  PaddingProps,
  PositionProps,
  SpaceProps,
} from 'styled-system'

export interface ButtonProps
  extends ColorProps,
    SpaceProps,
    FlexboxProps,
    PaddingProps,
    PositionProps,
    MarginProps,
    React.HTMLAttributes<HTMLButtonElement> {
  buttonSize?: string
  color?: 'primary' | 'secondary' | 'orange' | 'destruction' | 'white'
  isRounded?: boolean
  isLoading?: boolean
  disabled?: boolean
  variant?: 'contained' | 'outlined' | 'text'
}
