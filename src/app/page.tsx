import { db } from '@/lib/db'

export default async function Home() {
  await db.set('test', 'test')

  return <h1 className="text-red-500">Hello</h1>
}
