'use client'

import React from 'react'
import { Toaster } from 'react-hot-toast'

type Props = {
  children: React.ReactNode
}

const Providers = ({ children }: Props) => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </>
  )
}

export default Providers
