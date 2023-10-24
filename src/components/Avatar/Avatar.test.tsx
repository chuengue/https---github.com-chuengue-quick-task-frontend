import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Avatar from './Avatar'

describe('<Avatar />', () => {
  test('it should mount', () => {
    render(<Avatar />)

    const avatar = screen.getByTestId('Avatar')

    expect(avatar).toBeInTheDocument()
  })
})
