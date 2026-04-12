import { NavItem } from '@/1_atoms/NavItem'
import { routesConfig } from '@/routing/routes.config'

export function Sidebar() {
  return (
    <aside className="w-64 shrink-0 bg-slate-900 text-white p-4 flex flex-col gap-2">
      <h1 className="text-xl font-semibold px-4 py-3 mb-2 border-b border-slate-700">
        React Router
      </h1>
      <nav className="flex flex-col gap-1">
        {routesConfig.routes
          .filter((r) => r.showInNav)
          .map((r) => (
            <NavItem key={r.path} to={r.path}>
              {r.label}
            </NavItem>
          ))}
      </nav>
    </aside>
  )
}
