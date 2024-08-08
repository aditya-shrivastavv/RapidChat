import { LucideProps, UserPlus } from 'lucide-react'
import Image from 'next/image'

export const Icons = {
  Logo: (props: LucideProps) => (
    <Image
      src="/logo.svg"
      alt="Logo"
      height={45}
      width={45}
      referrerPolicy="no-referrer"
    />
  ),
  UserPlus,
  GitHubLogo: (props: LucideProps) => (
    <Image
      src="/github-logo.svg"
      alt="Logo"
      height={18}
      width={18}
      referrerPolicy="no-referrer"
    />
  )
}

export type Icon = keyof typeof Icons
