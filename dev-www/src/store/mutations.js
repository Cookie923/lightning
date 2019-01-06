import * as types from './mutation-types'
export const mutations = {
  [types.SET_NEWS_ID] (state, id) {
    state.newsId = id
  }
}