import { Avatar, Button } from '..'
import { Wrapper } from '../wrapper'
import { HeaderWrapper } from './header.styled'

const Header = () => {
  const buttons = [
    { title: 'Home', onClick: () => {} },
    { title: 'Criar task', onClick: () => {} },
  ]
  return (
    <>
      <HeaderWrapper>
        <Wrapper flexDirection='row'>
          <Avatar
            size='md'
            src='https://www.w3schools.com/w3images/avatar2.png'
          ></Avatar>
        </Wrapper>
        <Wrapper ml={32}>
          {buttons.map((e, index) => {
            return (
              <Button
                key={String(index).concat(e.title)}
                buttonSize='md'
                color='white'
                variant='text'
              >
                {e.title}
              </Button>
            )
          })}
        </Wrapper>
      </HeaderWrapper>
    </>
  )
}

export default Header
