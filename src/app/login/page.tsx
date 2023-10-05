'use client'

import GoogleLogo from '@/components/logo/GoogleLogo'
import Button from '@/components/ui/Button'
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'

type Props = {}

const Login = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false)

  async function loginWithGoogle() {
    setLoading(true)
    try {
      await signIn('google')
    } catch (error) {
      // display error message
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center max-w-md space-y-8">
          <div className="flex flex-col items-center gap-8">
            Logo
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
