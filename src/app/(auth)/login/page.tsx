'use client'
/**
 * Login page
 */
import GoogleLogo from '@/components/logo/GoogleLogo'
import { Icons } from '@/components/logo/Icons'
import Button from '@/components/ui/Button'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import toast from 'react-hot-toast'

/**
 * Renders the login page.
 * @returns Login page component.
 */
function Login() {
  const [loading, setLoading] = useState<boolean>(false)

  /**
   * Logs in the user with Google.
   */
  async function loginWithGoogle() {
    setLoading(true)
    try {
      await signIn('google')
    } catch (error) {
      toast.error('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center max-w-md space-y-8">
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-2">
              <Icons.Logo />
              <p className="text-2xl font-semibold italic">RapidChat</p>
            </div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <Button
            isLoading={loading}
            type="button"
            className="max-w-sm mx-auto w-full"
            onClick={loginWithGoogle}
          >
            {loading ? null : <GoogleLogo />}
            Google
          </Button>
        </div>
      </div>
    </>
  )
}

export default Login
