import AddFriend from '@/app/(dashboard)/dashboard/add/page'
import { render, screen } from '@testing-library/react'

it('should render the AddFriendForm component', () => {
  render(<AddFriend />)
  const addButton = screen.getByText('Add')
  expect(addButton).toBeInTheDocument()
})

it('should render the Add page title', () => {
  render(<AddFriend />)
  const pageTitle = screen.getByText('Add a friend')
  expect(pageTitle).toBeInTheDocument()
})
