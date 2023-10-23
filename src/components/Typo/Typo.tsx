import { FC } from 'react';
import { TypoWrapper } from './Typo.styled';
import { TypoProps } from './TypoTypes';

const Typo: FC<TypoProps> = ({ children, variant }) => {
  return (
    <TypoWrapper data-testid='Typo' variant={variant}>
      {children}
    </TypoWrapper>
  );
};

export default Typo;
