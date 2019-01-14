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