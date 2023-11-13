/**
 * Root layout component that wraps the entire application.
 */
import Providers from '@/components/Providers'
import type { Metadata } from 'next'
import './globals.css'
import React from 'react'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

type RootLayoutProps = {
  children: React.ReactNode
}

/**
 * Root layout component that wraps the entire application.
 * @param {React.ReactNode} children The child components to be rendered within the layout.
 * @returns The rendered layout component.
 */
function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
