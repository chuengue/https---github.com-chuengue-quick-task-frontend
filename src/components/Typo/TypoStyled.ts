import styled, { css } from 'styled-components'
import { typography, variant } from 'styled-system'
import { TypoProps } from './TypoTypes'

export const TypoWrapper = styled.span<TypoProps>`
  ${({ theme, color = 'white' }) => css`
    font-family: 'Roboto', Arial, sans-serif;
    font-weight: normal;
    color: ${theme.colors[color].default};
    ${variant({
      variants: {
        title: {
          fontSize: 18,
        },
        subtitle: {
          fontSize: 12,
        },
      },
    })};

    ${typography}
  `}
`
