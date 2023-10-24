import { FC } from 'react'
import { TypoWrapper } from './Typo.styled'
import { TypoProps } from './TypoTypes'

const Typo: FC<TypoProps> = ({ children, variant = 'title', ...rest }) => {
  return (
    <TypoWrapper data-testid='Typo' variant={variant} {...rest}>
      {children}
    </TypoWrapper>
  )
}

export default Typo
