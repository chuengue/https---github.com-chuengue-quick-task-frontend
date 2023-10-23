import { variant } from 'styled-system';
import styled, { css } from 'styled-components';
import { TypoProps } from './TypoTypes';

export const TypoWrapper = styled.span<TypoProps>`
  ${({ theme }) => css`
    font-family: 'Roboto', Arial, sans-serif;
    ${variant({
      variants: {
        title: {
          fontSize: '24px',
          fontWeight: 'bold',
          color: theme.colors.gray.dark,
        },
        subtile: {
          fontSize: '18px',
          fontWeight: 'normal',
          color: theme.colors.gray.default,
        },
      },
    })}
  `}
`;
