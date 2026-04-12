import { Route, Routes } from 'react-router-dom'
import { routesConfig } from '@/routing/routes.config'
import { AppPath } from '@/routing/paths'

export function createAppRouter() {
  const { element: layout, routes } = routesConfig
  return (
    <Routes>
      <Route element={layout}>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            index={path === AppPath.Counter}
            path={path === AppPath.Counter ? undefined : path}
            element={element}
          />
        ))}
      </Route>
    </Routes>
  )
}
