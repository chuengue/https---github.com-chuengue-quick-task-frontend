import { FC } from 'react'
import { TypoWrapper } from './TypoStyled'
import { TypoProps } from './TypoTypes'

const Typo: FC<TypoProps> = ({ children, variant = 'title', ...rest }) => {
  return (
    <TypoWrapper variant={variant} {...rest}>
      {children}
    </TypoWrapper>
  )
}

export default Typo
