import * as types from './mutation-types'

const mutation = {
  [types.SET_TOKEN] (state, token) {
    state.token = token
  }
}
export default mutation
