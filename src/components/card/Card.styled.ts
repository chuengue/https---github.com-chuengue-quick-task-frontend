import styled from 'styled-components'
import Theme from '../../theme/theme'

export const CardWrapper = styled.div`
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  border-radius: 32px;
  box-shadow: ${Theme.shadows.z2};
  background-color: ${Theme.colors.gray[600]};
  width: 18vw;
  height: 40vh;
`
export const CoverImg = styled.img`
  height: 50%;
  width: 90%;
  border-radius: 28px;
  margin-top: 5%;
  object-fit: fill;
  top: 0;
  left: 0;
  z-index: 1;
`
