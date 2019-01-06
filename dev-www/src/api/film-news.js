import axios from 'axios'

export function getFilmNews () {
  const url = '/news/NewsList.api'
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    console.log(err)
  })
}

export function getNewsDetails (id) {
  const url = '/news/Detail.api'
  return axios.get(url, {
    params: {
      newsId: id
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    console.log(err)
  })
}
