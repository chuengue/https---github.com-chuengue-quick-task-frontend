import { FC } from 'react';
import { AvatarWrapper } from './Avatar.styled';
import { avataProps } from './Avatar.types';
const Avatar: FC<avataProps> = ({ size, src, borderColor = 'gray', ...rest }) => {
  return (
    <AvatarWrapper
      src={src}
      size={size}
      borderColor={borderColor}
      {...rest}
    ></AvatarWrapper>
  );
};

export default Avatar;
