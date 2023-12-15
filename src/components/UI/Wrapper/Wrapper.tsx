import { FC } from 'react'
import styled from 'styled-components'
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
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

export interface WrapperInterface
  extends SpaceProps,
    BorderProps,
    PositionProps,
    LayoutProps,
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
