import { FC } from 'react';
import { cardProps } from './cardTypes';
import { CardWrapper, CoverImg } from './Card.styled';
import { Avatar } from '..';

const Card: FC<cardProps> = ({ description, title, borderColor, img, avatar }) => {
  return (
    <CardWrapper>
      <CoverImg src={img.src}></CoverImg>
    </CardWrapper>
  );
};
export default Card;
