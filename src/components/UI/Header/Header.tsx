import { useLocation, useNavigate } from 'react-router-dom'

import styled from 'styled-components'
import { Avatar, Button, Wrapper } from '../..'
import { HeaderWrapper } from './HeaderStyled'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const buttons = [
    {
      title: 'Home',
      route: '/',
      onClick: () => {
        navigate('/')
      },
    },
    {
      title: 'Criar task',
      route: '/new',
      onClick: () => {
        navigate('/new')
      },
    },
  ]
  const hasBorderBottom = (currentTab: string) => {
    console.log(currentTab)
    const currentRoute = location.pathname
    return currentRoute === currentTab
  }
  return (
    <>
      <HeaderWrapper>
        <Wrapper ml={8}>
          <Avatar
            size="md"
            src="https://www.w3schools.com/w3images/avatar2.png"
          ></Avatar>
        </Wrapper>
        <Wrapper ml={32}>
          {buttons.map((e, index) => {
            return (
              <CustomButtonForHeader
                key={String(index).concat(e.title)}
                buttonSize="md"
                color="white"
                variant="text"
                mx={8}
                onClick={e.onClick}
                style={{
                  borderBottom: hasBorderBottom(e.route)
                    ? '1px solid orange'
                    : 'none',
                }}
              >
                {e.title}
              </CustomButtonForHeader>
            )
          })}
        </Wrapper>
      </HeaderWrapper>
    </>
  )
}

export default Header

const CustomButtonForHeader = styled(Button)`
  border-radius: 0;
  width: 120px;
  &:hover {
    border-bottom: 1px solid orange;
  }
`
