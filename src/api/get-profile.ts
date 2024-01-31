import { api } from '@/lib/axios'

export enum EGetProfileKey {
  GET_PROFILE_KEY = 'PROFILE',
}

interface IGetProfileResponse {
  id: string
  name: string
  email: string
  phone: string | null
  role: 'manager' | 'customer'
  createAt: Date | null
  updateAt: Date | null
}

export async function getProfile() {
  const response = await api.get<IGetProfileResponse>(`/me`)

  return response.data
}
