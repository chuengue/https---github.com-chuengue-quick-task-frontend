import pallete from './pallete';
import { Config, system } from 'styled-system';

const shadows = {
  z1: '0px 1px 5px rgba(58, 64, 77, 0.3)',
  z2: '0px 2px 10px rgba(58, 64, 77, 0.35)',
};

const colors = { ...pallete };

const space = {
  s0: '0px',
  s1: '4px',
  s2: '8px',
  s3: '16px',
  s4: '24px',
  s5: '32px',
  s6: '40px',
  s7: '48px',
};

const fontSize = [12, 14, 16, 18, 24, 32, 48];

const Theme = { colors, fontSize, shadows, space };

system({ prop: 'cursor', cssProperty: 'cursor' } as Config);

export default Theme;
