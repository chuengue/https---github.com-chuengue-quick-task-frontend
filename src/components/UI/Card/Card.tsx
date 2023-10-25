import { FC } from 'react'
import { CardProps } from '.'
import { CardWrapper, CoverImg } from './CardStyled'

const Card: FC<CardProps> = ({
  description,
  title,
  borderColor,
  img,
  avatar,
}) => {
  return (
    <CardWrapper>
      <CoverImg src={img.src}></CoverImg>
    </CardWrapper>
  )
}
export default Card
