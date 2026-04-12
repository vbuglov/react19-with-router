export const AppPath = {
  Counter: '/',
  Table: '/table',
  Contacts: '/contacts',
  Instructions: '/instructions',
} as const

export type AppPath = (typeof AppPath)[keyof typeof AppPath]
