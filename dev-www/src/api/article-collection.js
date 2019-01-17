import axios from 'axios'

export function inquireActicle (username, aid) {
  const url = '/article/inquire'
  return axios.get(url,{
    params: {
      username: username,
      aid: aid
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    console.log(err)
  })
}

export function addCollection (username, atype, aid, articleinfo) {
  const url = '/article/collection'
  return axios.post(url,{
    username: username,
    atype: atype,
    aid: aid,
    articleinfo: articleinfo
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    console.log(err)
  })
}

export function cancelCollection (username, aid) {
  const url = '/article/cancel'
  return axios.post(url,{
    username: username,
    aid: aid
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    console.log(err)
  })
}