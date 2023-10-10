'use client'

import { chatHrefConstructor } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {
  friends: User[]
  sessionId: string
}

const SidebarChatList = ({ friends, sessionId }: Props) => {
  const router = useRouter()
  const pathname = usePathname()
  const [unseenMessages, setUnseenMessages] = useState<Message[]>([])

  useEffect(() => {
    if (pathname.includes('chat')) {
      setUnseenMessages((prev) => {
        return prev.filter((msg) => !pathname.includes(msg.senderId))
      })
    }
  }, [pathname])

  return (
    <ul role="list" className="max-h-[25rem] overflow-y-auto -mx-2 space-y-1">
      {friends.sort().map((friend) => {
        const unseenMessageCount = unseenMessages.filter(
          (unseenMessage) => unseenMessage.senderId === friend.id
        ).length

        return (
          <li key={friend.id}>
            <a href={`/dashboard/chat/${chatHrefConstructor(sessionId, friend.id)}`}>Hi</a>
          </li>
        )
      })}
    </ul>
  )
}

export default SidebarChatList
