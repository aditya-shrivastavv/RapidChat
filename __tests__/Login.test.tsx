import { render, screen } from '@testing-library/react'
import Login from '@/app/(auth)/login/page'

it('should have a google login button', () => {
  render(<Login />)
  const button = screen.getByRole('button')
  expect(button).toBeInTheDocument()
})
