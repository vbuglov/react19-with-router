import { Outlet } from 'react-router-dom'
import { Sidebar } from '@/3_organisms/Sidebar'

export function MainLayout() {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}
