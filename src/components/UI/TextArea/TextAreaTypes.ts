import { LayoutProps } from 'styled-system'
import { InputProps } from '../Input/InputTypes'

export interface TextAreaProps
  extends LayoutProps,
    Omit<InputProps, 'onChange'> {
  rows?: number
  maxLenght?: number
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}
