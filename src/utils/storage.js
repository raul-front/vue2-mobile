/*
 * @Descripttion: 统一的本地存储
 * @Author: pujianguo
 * @Date: 2021-11-06 01:05:56
 */
const TOKEN = 'token'

export default {
  // token
  setToken: (token) => {
    window.localStorage.setItem(TOKEN, token)
  },
  getToken: () => {
    return window.localStorage.getItem(TOKEN)
  },
  rmToken: () => {
    window.localStorage.removeItem(TOKEN)
  },
}
