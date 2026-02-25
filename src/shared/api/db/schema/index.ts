import { relations } from 'drizzle-orm'
import * as posts from './posts'
import * as users from './users'

export * from './posts'
export * from './users'

export const usersRelations = relations(users.users, ({ many }) => ({
  posts: many(posts.posts),
}))

export const postsRelations = relations(posts.posts, ({ one }) => ({
  author: one(users.users, {
    fields: [posts.posts.authorId],
    references: [users.users.id],
  }),
}))
