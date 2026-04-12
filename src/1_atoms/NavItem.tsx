import { NavLink } from 'react-router-dom'
import type { ReactNode } from 'react'

export function NavItem({ to, children }: { to: string; children: ReactNode }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `block px-4 py-2 rounded-lg transition-colors ${
          isActive
            ? 'bg-violet-600 text-white'
            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
        }`
      }
    >
      {children}
    </NavLink>
  )
}
