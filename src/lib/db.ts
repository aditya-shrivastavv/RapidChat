/**
 * This file is used to create a connection to the Upstash Redis database.
 */
import { Redis } from '@upstash/redis'

/**
 * Create a connection to the Upstash Redis database.
 */
export const db = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!
})
