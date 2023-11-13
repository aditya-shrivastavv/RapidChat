import { z } from 'zod'

/**
 * Validates the input for adding a friend, ensuring that the email is a valid email address.
 */
export const addFriendValidator = z.object({
  email: z.string().email()
})
