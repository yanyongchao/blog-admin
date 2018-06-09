import { STORE_KEY_JWT, STORE_KEY_USERINFO } from './constants'

export const jwt = localStorage.getItem(STORE_KEY_JWT)
export const userinfo = localStorage.getItem(STORE_KEY_USERINFO)
