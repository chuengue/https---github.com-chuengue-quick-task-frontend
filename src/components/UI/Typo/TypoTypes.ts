import { TypographyProps } from 'styled-system'

export interface TypoProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    TypographyProps {
  color?: 'white' | 'primary' | 'secondary' | 'gray'
  variant?: 'title' | 'subtitle'
  children?: React.ReactNode
}
