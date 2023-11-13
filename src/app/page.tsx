'use client'
/**
 * Home page
 */
import Button from '@/components/ui/Button'
import { signOut } from 'next-auth/react'

/**
 * Renders the Home page component.
 * This page is never reached because the user is redirected to the dashboard if they are logged in.
 * @returns JSX.Element
 */
function Home() {
  return (
    <Button variant="ghost" onClick={() => signOut()}>
      Sign Out
    </Button>
  )
}

export default Home
