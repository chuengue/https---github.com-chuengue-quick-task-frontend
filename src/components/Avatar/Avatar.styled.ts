import styled, { css } from 'styled-components';
import { avataProps } from '..';
import { space, variant } from 'styled-system';

// Defina as variações de tamanho para o avatar
const sizeVariants = variant({
  prop: 'size',
  variants: {
    sm: { width: '32px', height: '32px' },
    md: { width: '48px', height: '48px' },
    lg: { width: '64px', height: '64px' },
    xl: { width: '96px', height: '96px' },
    xxl: { width: '112px', height: '112px' },
  },
});
export const AvatarWrapper = styled.img<
  Omit<
    avataProps,
    'borderColor' & {
      borderColor: string;
    }
  >
>`
  ${({ borderColor, theme }) => css`
    box-shadow: ${theme.shadows.z2};
    border-radius: 50%;
    border: 10px solid ${theme.colors[borderColor ?? 'gray'].default};
    object-fit: cover;
    ${sizeVariants}
    ${space}
  `}
`;
