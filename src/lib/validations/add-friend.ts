import { z } from 'zod'

export const validateEmail = z.object({
  email: z.string().email()
})
