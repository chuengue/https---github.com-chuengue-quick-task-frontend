import styled, { css } from 'styled-components'
import { space, variant } from 'styled-system'
import { avataProps } from '..'

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
})
export const AvatarWrapper = styled.img<
  Omit<
    avataProps,
    'borderColor' & {
      borderColor: string
    }
  >
>`
  ${({ theme }) => css`
    box-shadow: ${theme.shadows.z2};
    border-radius: 50%;
    object-fit: cover;
    ${sizeVariants}
    ${space}
  `}
`
