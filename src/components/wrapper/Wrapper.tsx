import { FC } from 'react'
import styled from 'styled-components'
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  system,
} from 'styled-system'

interface WrapperInterface
  extends SpaceProps,
    BorderProps,
    PositionProps,
    FlexboxProps,
    Omit<ColorProps, 'color'>,
    GridProps,
    ShadowProps,
    React.HtmlHTMLAttributes<HTMLDivElement | HTMLFormElement> {
  cursor?: string
  gap?: string
}

const WrapperComponent: FC<WrapperInterface> = styled.div<WrapperInterface>(
  { display: 'flex' },
  space,
  layout,
  color,
  border,
  position,
  flexbox,
  grid,
  shadow,
  system({ cursor: true, wordBreak: true, wordWrap: true, gap: true }),
)

export default WrapperComponent
