import { HTMLAttributes } from 'react'
import { SpaceProps } from 'styled-system'

export interface InputProps extends SpaceProps {
  disabled?: boolean
  inputProps?: HTMLAttributes<HTMLInputElement>
  label: string
  value?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
