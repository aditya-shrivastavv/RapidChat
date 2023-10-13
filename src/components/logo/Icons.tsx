import { LucideProps, UserPlus } from 'lucide-react'
import Image from 'next/image'

export const Icons = {
  Logo: (props: LucideProps) => (
    <Image
      src="/logo.svg"
      alt="Logo"
      height={35}
      width={35}
      referrerPolicy="no-referrer"
    />
  ),
  UserPlus
}

export type Icon = keyof typeof Icons
