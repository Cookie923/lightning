import axios from 'axios'
import { commonParams } from './douban_config'

export function searchFilms (query, start, count) {
  const url = '/api/movie/search'
  const data = Object.assign({}, commonParams, {
    q: query,
    start,
    count
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    console.log(err)
  })
}
