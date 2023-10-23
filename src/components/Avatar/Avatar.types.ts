import { MarginProps } from 'styled-system';

export interface avataProps extends MarginProps {
  borderColor?: 'purple' | 'yellow' | 'red' | 'orange' | 'gray';
  size: string;
  src: string;
}
