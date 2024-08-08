/**
 * File responsible for all authentication logic.
 */
import { fetchRedis } from '@/helpers/redis'
import { UpstashRedisAdapter } from '@next-auth/upstash-redis-adapter'
import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { db } from './db'

/**
 * Function to get Google OAuth credentials from environment variables.
 * @returns Google OAuth credentials.
 */
function getGoogleCredentials() {
  const clientId = process.env.GOOGLE_CLIENT_ID
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET

  if (!clientId || clientId.length === 0) {
    throw new Error('Missing GOOGLE_CLIENT_ID')
  }

  if (!clientSecret || clientSecret.length === 0) {
    throw new Error('Missing GOOGLE_CLIENT_SECRET')
  }

  return { clientId, clientSecret }
}

/**
 * Next Auth configuration.
 */
export const authOptions: NextAuthOptions = {
  adapter: UpstashRedisAdapter(db), // Automatic Integration with Upstash
  session: {
    strategy: 'jwt' // Use JWT for session management
  },
  pages: {
    signIn: '/login' // Redirect to /login when user is not authenticated
  },
  providers: [
    GoogleProvider({
      // Google OAuth Provider
      clientId: getGoogleCredentials().clientId,
      clientSecret: getGoogleCredentials().clientSecret
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // Actions to be performed after a event
    async jwt({ token, user }) {
      // Buggy:
      // const dbUser = ((await db.get(`user:${token.id}`)) as User) || null
      const dbUserResult = (await fetchRedis('get', `user:${token.id}`)) as
        | string
        | null

      if (!dbUserResult) {
        if (user) {
          token.id = user!.id
        }

        return token
      }

      const dbUser = JSON.parse(dbUserResult) as User

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image
      }
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
      }

      return session
    },
    redirect() {
      return '/dashboard'
    }
  }
}
