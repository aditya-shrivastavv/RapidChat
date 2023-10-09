import FriendRequests from '@/components/FriendRequests'
import { fetchRedis } from '@/helpers/redis'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'
import React from 'react'

const Requests = async () => {
  const session = await getServerSession(authOptions)
  if (!session) notFound()

  // ids of users who sent current logged in user a friend request
  const incomingSenderIds = (await fetchRedis(
    'smembers',
    `user:${session.user.id}:incoming_friend_requests`
  )) as string[]

  console.log('incomingSenderIds:', incomingSenderIds)

  const incomingFriendRequests = await Promise.all(
    incomingSenderIds.map(async (senderId) => {
      const sender = (await fetchRedis('get', `user:${senderId}`)) as User
      return {
        senderId,
        senderEmail: sender.email
      }
    })
  )

  console.log('incomingFriendRequests: ', incomingFriendRequests)

  return (
    <main className="pt-8">
      <h1 className="font-bold text-5xl mb-8">Add a friend</h1>
      <div className="flex flex-col gap-4">
        <FriendRequests
          incomingFriendRequests={incomingFriendRequests}
          sessionId={session.user.id}
        />
      </div>
    </main>
  )
}

export default Requests