import styled from 'styled-components';
import { space, color, layout, flexbox, border, position } from 'styled-system';

export const styledSystemMixin = (Component) => styled(Component)`
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${border}
  ${position}
`;
