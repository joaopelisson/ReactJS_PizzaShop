import { api } from '@/lib/axios'

export enum EGetManagedRestaurantKey {
  GET_MANAGED_RESTAURANT_KEY = 'MANAGED-RESTAURANT',
}

interface IGetManagedRestaurantResponse {
  id: string
  name: string
  createAt: Date | null
  updateAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagedRestaurant() {
  const response =
    await api.get<IGetManagedRestaurantResponse>(`/managed-restaurant`)

  return response.data
}
