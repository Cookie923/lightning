import axios from 'axios'

export function inquireView (username, filmid) {
  const url = '/film/viewrecord'
  return axios.post(url,{
    username: username,
    filmid: filmid
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    console.log(err)
  })
}

export function wantedFilm (username, filmid, filminfo) {
  const url = '/film/viewrecord/wanted'
  return axios.post(url,{
    username: username,
    filmid: filmid,
    filminfo: filminfo
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    console.log(err)
  })
}

export function watchedFilm (username, filmid, rating, comment, filminfo) {
  const url = '/film/viewrecord/watched'
  return axios.post(url,{
    username: username,
    filmid: filmid,
    rating: rating,
    comment: comment,
    filminfo: filminfo
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    console.log(err)
  })
}

export function deleteRecord (username, filmid) {
  const url = '/film/viewrecord/delete'
  return axios.post(url,{
    username: username,
    filmid: filmid
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    console.log(err)
  })
}
