/**
 * This file is used to define the types of the data that is stored in the database.
 */

/**
 * Type user
 */
interface User {
  name: string
  email: string
  image: string
  id: string
}

interface Chat {
  id: string
  messages: Message[]
}

interface Message {
  id: string
  senderId: string
  recieverId: string
  text: string
  timestamp: number
}

interface FriendRequest {
  id: string
  senderId: string
  recieverId: string
}
