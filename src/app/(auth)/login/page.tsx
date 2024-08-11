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

const codeData = [
  '{',
  '  "name": "Your name",',
  '  "email": "Your email", ',
  '  "image": "Your google profile image URL"',
  '}'
]

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

          <div className="border-[1.2px] p-6 border-gray-300 rounded-xl">
            <div className="flex flex-col text-sm bg-gray-100 p-2 rounded-xl mb-3">
              {codeData.map((line) => (
                <code key={line} className="max-w-80">
                  {line}
                </code>
              ))}
            </div>

            <ul className="max-w-80 text-xs list-disc flex flex-col gap-1 pl-4">
              <li>That&apos;s the only data we receive from Google.</li>
              <li>
                Just a demo project by{' '}
                <a
                  href="https://github.com/aditya-shrivastavv"
                  className="text-blue-800 hover:underline"
                >
                  github/aditya-shrivastavv
                </a>
              </li>
              <li>
                Email is not used for any purpose other than login. We
                don&apos;t send any emails.
              </li>
              <li>
                If you prefer not to provide your email for login, we fully
                respect your choice. Watch demo video below.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
