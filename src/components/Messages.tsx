'use client'

import { pusherClient } from '@/lib/pusher'
import { cn, pusherCompatible } from '@/lib/utils'
import { Message } from '@/lib/validations/message'
import { format } from 'date-fns'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

type Props = {
  initialMessages: Message[]
  sessionId: string
  chatId: string
  sessionImg: string | null | undefined
  chatPartner: User
}

const Messages = ({
  initialMessages,
  sessionId,
  sessionImg,
  chatPartner,
  chatId
}: Props) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const scrollDownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    pusherClient.subscribe(pusherCompatible(`chat:${chatId}`))

    const messageHandler = (message: Message) => {
      setMessages((prev) => [message, ...prev])
    }

    pusherClient.bind('incoming-message', messageHandler)

    return () => {
      pusherClient.unsubscribe(pusherCompatible(`chat:${chatId}`))
      pusherClient.unbind('incoming-message', messageHandler)
    }
  }, [chatId])

  const formatTimestamp = (timestamp: number) => {
    return format(timestamp, 'HH:mm')
  }

  return (
    <div
      id="messages"
      className="flex h-full flex-1 flex-col-reverse gap-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
    >
      <div ref={scrollDownRef} />

      {messages.map((message, index) => {
        const isCurrentUser = message.senderId === sessionId
        const hasNextMessageFromTheSameUser =
          messages[index - 1]?.senderId === messages[index].senderId

        return (
          <div
            className="chat-message hover:bg-gray-100"
            key={`${message.id}-${message.timestamp}`}
          >
            <div
              className={cn('flex items-end', {
                'justify-end': isCurrentUser
              })}
            >
              <div
                className={cn(
                  'flex flex-col space-y-2 text-base max-w-xs mx-2',
                  {
                    'order-1 items-end': isCurrentUser,
                    'order-2 items-start': !isCurrentUser
                  }
                )}
              >
                <span
                  className={cn('px-4 py-2 rounded-lg inline-block', {
                    'bg-indigo-600 text-white': isCurrentUser,
                    'bg-gray-200 text-gray-900': !isCurrentUser,
                    'rounded-br-none':
                      !hasNextMessageFromTheSameUser && isCurrentUser,
                    'rounded-bl-none':
                      !hasNextMessageFromTheSameUser && !isCurrentUser
                  })}
                >
                  {message.text}{' '}
                  <span className="ml-2 text-xs text-gray-400">
                    {formatTimestamp(message.timestamp)}
                  </span>
                </span>
              </div>

              <div
                className={cn('relative w-6 h-6', {
                  'order-2': isCurrentUser,
                  'order-1': !isCurrentUser,
                  invisible: hasNextMessageFromTheSameUser
                })}
              >
                <Image
                  fill
                  src={
                    isCurrentUser ? (sessionImg as string) : chatPartner.image
                  }
                  alt="Profile picture"
                  referrerPolicy="no-referrer"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Messages
