import type { ReactNode } from 'react'
import { MainLayout } from '@/4_frames/MainLayout'
import { CounterPage } from '@/5_pages/CounterPage'
import { TablePage } from '@/5_pages/TablePage'
import { ContactsPage } from '@/5_pages/ContactsPage'
import { InstructionsPage } from '@/5_pages/InstructionsPage'
import { AppPath } from '@/routing/paths'

export interface RouteConfig {
  path: AppPath
  element: ReactNode
  label: string
  showInNav: boolean
}

export interface LayoutConfig {
  element: ReactNode
  routes: RouteConfig[]
}

export const routesConfig: LayoutConfig = {
  element: <MainLayout />,
  routes: [
    { path: AppPath.Counter, element: <CounterPage />, label: 'Счётчик', showInNav: true },
    { path: AppPath.Table, element: <TablePage />, label: 'Таблица', showInNav: true },
    { path: AppPath.Contacts, element: <ContactsPage />, label: 'Контакты', showInNav: true },
    { path: AppPath.Instructions, element: <InstructionsPage />, label: 'Инструкция', showInNav: true },
  ],
}
