import $ from 'jquery'
import { getCommentApi, addCommentApi } from './api'
import 'bootstrap'
/* eslint-disable */
import css from './style.css'
import { formTemplate, addComment, escapeHtml } from './template'

/* eslint-disable */
export function init(options) {
  let offset
  let isLoading = false
  const { siteKey, apiUrl, addCommentUrl } = options
  $(options.containerSelector).append(formTemplate(siteKey))
  const loadingBtnSelector = `#${siteKey}-loadingBtn`
  const formNameSelector = `.${siteKey}-form`
  const nicknameSelector = `#${siteKey}-nickname`
  const contentSelector = `#${siteKey}-content`
  const messageSelector = `#${siteKey}-message`

  getCommentApi(apiUrl, siteKey, offset, ((data) => {
    if (data.discussion.length) {
      offset = data.discussion[data.discussion.length - 1].id
      addComment(data, messageSelector)
    }
    if (!data.loadingmore) $(loadingBtnSelector).hide()
  }))
  $(formNameSelector).submit((e) => {
    e.preventDefault()
    if (isLoading) return
    isLoading = true
    const values = {
      nickname: $(nicknameSelector).val(),
      content: $(contentSelector).val()
    }
    addCommentApi(addCommentUrl, siteKey, values, (data) => {
      isLoading = false
      $(messageSelector).prepend(`
        <div class="card">
          <div class="card-body">
          <h5 class="card-title">${escapeHtml(values.nickname)}</h5>
          <p class="card-text">${escapeHtml(values.content)}</p>
        </div>
        </div>
      `)
      $(nicknameSelector).val('')
      $(contentSelector).val('')
    })
  })
  $(loadingBtnSelector).on('click', (e) => {
    if (isLoading) return
    isLoading = true
    getCommentApi(apiUrl, siteKey, offset, ((data) => {
      isLoading = false
      if (!data.loadingmore || data.discussion.length < 5) $(loadingBtnSelector).hide()
      addComment(data, messageSelector)
      offset = data.discussion[data.discussion.length - 1].id
    }))
  })
}
