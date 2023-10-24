import { Avatar, Button, Wrapper } from '..'
import { HeaderWrapper } from './HeaderStyled'

const Header = () => {
  const buttons = [
    { title: 'Home', onClick: () => {} },
    { title: 'Criar task', onClick: () => {} },
  ]
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
              <Button
                key={String(index).concat(e.title)}
                buttonSize="md"
                color="white"
                variant="text"
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
