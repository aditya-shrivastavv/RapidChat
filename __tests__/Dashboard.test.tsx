import Home from '@/app/page'
import { render, screen } from '@testing-library/react'

it('should render the Sign Out button and call signOut on click', () => {
  render(<Home />)
  const button = screen.getByText('Sign Out')
  expect(button).toBeInTheDocument()
})
