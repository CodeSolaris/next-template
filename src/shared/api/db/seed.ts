import process from 'node:process'
import { db } from './client'
import * as schema from './schema'

async function main() {
  await db.delete(schema.posts)
  await db.delete(schema.users)

  const newUser = await db.insert(schema.users).values({
    fullName: 'John Doe',
    email: 'john@example.com',
  }).returning()

  await db.insert(schema.posts).values({
    title: 'Hello Drizzle',
    content: 'This is my first post with Neon and FSD',
    authorId: newUser[0].id,
  })

  process.exit(0)
}

main().catch((err) => {
  console.error('❌ Seed failed!')
  console.error(err)
  process.exit(1)
})
