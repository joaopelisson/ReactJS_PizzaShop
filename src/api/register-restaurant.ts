import { api } from '@/lib/axios'

export interface IRegisterRestaurantBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurant({
  email,
  managerName,
  phone,
  restaurantName,
}: IRegisterRestaurantBody) {
  await api.post(`/restaurants`, { email, managerName, phone, restaurantName })
}
