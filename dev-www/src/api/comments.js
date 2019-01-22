import axios from 'axios'

export function inquireComments (username, aid, filmid) {
  const url = '/article/inquire/comments'
  return axios.get(url,{
    params: {
      username: username,
      aid: aid,
      filmid: filmid
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    console.log(err)
  })
}

export function addComment (username, publisher, source_type, aid, filmid, content) {
  const url = '/article/comment'
  return axios.post(url,{
    username: username,
    publisher: publisher,
    source_type: source_type,
    aid: aid,
    filmid: filmid,
    content: content
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    console.log(err)
  })
}

export function deleteComment (id) {
  const url = '/article/comment/cancel'
  return axios.post(url,{
    id: id
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    console.log(err)
  })
}