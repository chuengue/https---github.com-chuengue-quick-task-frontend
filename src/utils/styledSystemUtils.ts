import styled from 'styled-components'
import { border, color, flexbox, layout, position, space } from 'styled-system'

export const styledSystemMixin = (Component) => styled(Component)`
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${border}
  ${position}
`
