export interface TypoProps extends React.HTMLAttributes<HTMLParagraphElement> {
  color?: string
  variant?: 'title' | 'subtitle'
  children?: React.ReactNode
}
