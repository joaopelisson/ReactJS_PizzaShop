import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { NavLink } from './nav-link'
import { Separator } from './ui/separator'

enum ELINKS_TO_NAVIGATE {
  HOME = '/',
  ORDERS = '/orders',
}

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />
        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to={ELINKS_TO_NAVIGATE.HOME}>
            <Home className="h-4 w-4" />
            Inicio
          </NavLink>
          <NavLink to={ELINKS_TO_NAVIGATE.ORDERS}>
            <UtensilsCrossed className="h-4 w-4" />
            Pedidos
          </NavLink>
        </nav>
      </div>
    </div>
  )
}