import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

enum ESTATUS_ORDERS {
  ALL = 'all',
  PENDING = 'pending',
  CANCELED = 'canceled',
  PROCESSING = 'processing',
  DELIVERING = 'delivering',
  DELIVERED = 'delivered',
}

export function OrderTableFilters() {
  return (
    <form className="mb-2 mt-2 flex  items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="ID do pedido" className="h-8 w-auto" />
      <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
      <Select defaultValue={ESTATUS_ORDERS.ALL}>
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={ESTATUS_ORDERS.ALL}>Todos status</SelectItem>
          <SelectItem value={ESTATUS_ORDERS.PENDING}>Pendente</SelectItem>
          <SelectItem value={ESTATUS_ORDERS.CANCELED}>Cancelado</SelectItem>
          <SelectItem value={ESTATUS_ORDERS.PROCESSING}>Em preparo</SelectItem>
          <SelectItem value={ESTATUS_ORDERS.DELIVERING}>Em entrega</SelectItem>
          <SelectItem value={ESTATUS_ORDERS.DELIVERED}>Entregue</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" variant="secondary" size="xs">
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>

      <Button type="button" variant="outline" size="xs">
        <X className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>
    </form>
  )
}
