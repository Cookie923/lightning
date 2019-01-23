import axios from 'axios'

export function inquireCheckin (username) {
  const url = '/account/checkin/inquire'
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

export function checkIn (username) {
  const url = '/account/checkin'
  return axios.post(url,{
    username: username
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    console.log(err)
  })
}