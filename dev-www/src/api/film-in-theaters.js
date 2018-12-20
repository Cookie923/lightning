import axios from 'axios'
import { commonParams } from './douban_config'

export function getFilmInTheaters (city, start, count) {
  const url = '/api/movie/in_theaters'
  const data = Object.assign({}, commonParams, {
    city,
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

export function getFilmDetail (id) {
  const url = `/api/movie/subject/${id}`
  const data = Object.assign({}, commonParams)
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    console.log(err)
  })
}
