import axios from 'axios'

export function userDynamic (username) {
  const url = '/account/dynamic'
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