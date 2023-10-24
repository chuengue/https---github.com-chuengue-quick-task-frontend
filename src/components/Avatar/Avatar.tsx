import { FC } from 'react'
import { AvatarWrapper } from './AvatarStyled'
import { avataProps } from './AvatarTypes'
const Avatar: FC<avataProps> = ({ size = 'md', src, ...rest }) => {
  return <AvatarWrapper src={src} size={size} {...rest}></AvatarWrapper>
}

export default Avatar
