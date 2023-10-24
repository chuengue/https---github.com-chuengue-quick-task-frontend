import { FC } from 'react'
import { CardWrapper, CoverImg } from './Card.styled'
import { cardProps } from './cardTypes'

const Card: FC<cardProps> = ({
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
