import styled, { css } from 'styled-components';
import { ButtonProps } from '.';
import { variant } from 'styled-system';

export const StyledButton = styled.button<
  Omit<ButtonProps, 'color'> & {
    buttonSize?: string;
    color: 'purple' | 'yellow' | 'red' | 'orange' | 'gray';
    isRounded?: boolean;
    isLoading?: boolean;
  }
>`
  ${({ theme, color = 'purple', isLoading, isRounded, disabled }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    border-radius: 8px;
    border: 1px solid #f5f5f5;
    ${isRounded &&
    css`
      border-radius: 50px;
    `}
    ${isLoading
      ? variant({
          variants: {
            contained: {
              bg: theme.colors[color].default,
              border: 'none',
            },
            outlined: {
              bg: theme.colors[color].light,
              borderColor: theme.colors[color].light,
            },
          },
        })
      : variant({
          variants: {
            contained: {
              bg: theme.colors[color].default,
              border: 'none',
              color: theme.colors.white,
              boxShadow: theme.shadows.z1,
              '&:hover': {
                bg: theme.colors[color].dark,
                boxShadow: theme.shadows.z2,
              },
              '&:focus': {
                bg: theme.colors[color].dark,
                boxShadow: theme.shadows.z1,
              },
              '&:disabled': {
                bg: theme.colors.gray.transparency,
                boxShadow: 'none',
                color: theme.colors.gray[300],
                cursor: 'not-allowed',
              },
              '&:active': {
                bg: disabled ? '' : theme.colors[color].default,
                boxShadow: theme.shadows.z1,
              },
            },
            outlined: {
              bg: ' transparent',
              borderColor: theme.colors[color].light,
              color:
                color === 'gray' ? theme.colors.gray.dark : theme.colors[color].default,
            },
            '&:hover': {
              bg: theme.colors.gray.transparency,
            },
            '&:focus': {
              bg: theme.colors[color].transparency,
              borderColor: theme.colors[color].default,
              color: color === 'gray' ? theme.colors.gray[500] : theme.colors[color].dark,
            },
            '&:disabled': {
              bg: ' transparent',
              color: theme.colors.gray[300],
              borderColor: theme.colors.gray.light,
              boxShadow: 'none',
              cursor: 'not-allowed',
            },
            '&:active': {
              bg: disabled ? '' : theme.colors[color].light,
              borderColor: disabled ? '' : theme.colors[color].light,
              color: disabled
                ? ''
                : color === 'gray'
                ? theme.colors.gray[500]
                : theme.colors[color].dark,
            },
          },
        })};
    ${variant({
      prop: 'buttonSize',
      variants: {
        xl: {
          fontSize: theme.fontSize[5],
          height: 72,
          px: 's4',
        },
        lg: {
          fontSize: theme.fontSize[3],
          height: 56,
          px: 's4',
        },
        md: {
          fontSize: theme.fontSize[2],
          height: 48,
          px: 's3',
        },
        sm: {
          fontSize: theme.fontSize[1],
          height: 32,
          px: 's3',
        },
      },
    })}
  `}
`;
