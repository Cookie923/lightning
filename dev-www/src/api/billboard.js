import axios from 'axios'
import { commonParams } from './douban_config'

export function weeklyBillboard () {
  const url = '/api/movie/weekly'
  const data = Object.assign({}, commonParams)
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    console.log(err)
  })
}

export function usBillboard () {
  const url = '/api/movie/us_box'
  const data = Object.assign({}, commonParams)
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    console.log(err)
  })
}
