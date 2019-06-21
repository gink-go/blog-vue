import * as types from './mutation-types'
// 获取token
export const setToken = function ({ commit }, token) {
  commit(types.SET_TOKEN, token)
}
