import axios from 'axios'

export function wantedAllFilm (username) {
  const url = '/account/viewrecord/wanted'
  return axios.get(url,{
    params: {
    	username: username
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    console.log(err)
  })
}

export function watchedAllFilm (username) {
  const url = '/account/viewrecord/watched'
  return axios.get(url,{
    params: {
    	username: username
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    console.log(err)
  })
}