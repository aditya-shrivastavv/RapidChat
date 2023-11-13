'use client'
/**
 * Global Providers
 */
import React from 'react'
import { Toaster } from 'react-hot-toast'

type Props = {
  children: React.ReactNode
}

/**
 * Wraps the application with necessary providers and global components.
 * @param {React.ReactNode} children - The child components to be wrapped.
 * @returns The wrapped components.
 */
function Providers({ children }: Props) {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </>
  )
}

export default Providers
