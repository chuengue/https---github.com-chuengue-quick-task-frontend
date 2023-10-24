import { FC } from 'react'
import { AvatarWrapper } from './Avatar.styled'
import { avataProps } from './Avatar.types'
const Avatar: FC<avataProps> = ({ size = 'md', src, ...rest }) => {
  return <AvatarWrapper src={src} size={size} {...rest}></AvatarWrapper>
}

export default Avatar
