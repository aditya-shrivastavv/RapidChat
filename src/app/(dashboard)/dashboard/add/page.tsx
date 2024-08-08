import AddFriendForm from '@/components/AddFriendForm'

/**
 * Renders the Add page, which allows the user to add a friend.
 * @returns JSX.Element
 */
function AddFriend() {
  return (
    <main className="pt-8 container">
      <h1 className="font-bold text-5xl mb-8">Add a friend</h1>
      <AddFriendForm />
    </main>
  )
}

export default AddFriend
