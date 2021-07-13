import $ from 'jquery'

export function getCommentApi(apiUrl, siteKey, offset, cb) {
  $.ajax({
    url: `${apiUrl}?site=${siteKey}&offset=${offset}`,
    type: 'GET'
  })
    .done((data) => {
      cb(data)
    })
}
export function addCommentApi(addCommentUrl, siteKey, data, cb) {
  $.ajax({
    url: addCommentUrl,
    type: 'POST',
    data: {
      site: siteKey,
      nickname: data.nickname,
      content: data.content
    }
  })
    .done((data) => {
      cb(data)
    })
    .fail((err) => {
      console.log(err)
    })
}
