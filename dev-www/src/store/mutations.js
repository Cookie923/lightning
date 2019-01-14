import * as types from './mutation-types'
const mutations = {
  [types.SET_NEWS_ID] (state, id) {
    state.newsId = id
  },
  [types.SET_MOVIE_RTYPE] (state, rtype) {
  	state.curFilmRtype = rtype
  },
  [types.SET_USERNAME] (state, username) {
  	state.username = username
  }
}

export default mutations
