import AddFriendForm from '@/components/AddFriendForm'
import React from 'react'

type Props = {}

const Add = (props: Props) => {
  return (
    <main className="pt-8 container">
      <h1 className="font-bold text-5xl mb-8">Add a friend</h1>
      <AddFriendForm />
    </main>
  )
}

export default Add
