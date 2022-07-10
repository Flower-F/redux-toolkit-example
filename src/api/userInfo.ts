import { request } from '@/utils'

export type TUserInfo = {
  name: string
  address: string
  phone: string
}

export const getUserInfo = (id: number) => request<TUserInfo>({
  url: '/getUserInfo',
  method: 'GET',
  params: {
    id
  }
})

export const setUserInfo = (userInfo: TUserInfo) => request<void>({
  url: '/setUserInfo',
  method: 'POST',
  data: userInfo
})

const userInfoApi = {
  getUserInfo,
  setUserInfo
}

export default userInfoApi
