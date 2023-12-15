import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { Wrapper, WrapperInterface } from '..'
import Theme from '../../../theme/theme'

interface SurfaceProps extends WrapperInterface {
  children: ReactNode
}
const Surface: FC<SurfaceProps> = ({ children, ...rest }) => {
  return <CustomWrapperForSurface {...rest}>{children}</CustomWrapperForSurface>
}
export default Surface

export const CustomWrapperForSurface = styled(Wrapper)`
  background: ${Theme.colors.blue.semi};
  overflow: auto;
  width: 100%;
  border-radius: 8px;
  padding: 8px;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    margin: 10px 0;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${Theme.colors.blue.default};
    border-radius: 4px;
  }
`
