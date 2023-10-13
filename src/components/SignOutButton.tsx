'use client'

import { Loader2, LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'
import { ButtonHTMLAttributes, useState } from 'react'
import toast from 'react-hot-toast'
import Button from './ui/Button'

interface SignOutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SignOutButton = ({ ...props }: SignOutButtonProps) => {
  const [isSigningOut, setIsSigningOut] = useState<boolean>(false)

  return (
    <Button
      {...props}
      variant="ghost"
      onClick={async () => {
        setIsSigningOut(true)
        try {
          await signOut()
        } catch (error) {
          toast.error('Oops!, There was a problem signing you out.!')
        } finally {
          setIsSigningOut(false)
        }
      }}
    >
      {isSigningOut ? (
        <Loader2 className="animate-spin h-4 w-4" />
      ) : (
        <LogOut className="w-4 h-4" />
      )}
    </Button>
  )
}

export default SignOutButton
