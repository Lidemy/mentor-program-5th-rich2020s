import $ from 'jquery'

export function formTemplate(siteKey) {
  const template = `<div class="container-sm">
  <h1 class="title">留言板</h1>
  <form method="POST" action="http://mentor-program.co/mtr04group3/rich0127/week12/hw1/api_add_comment.php" class="${siteKey}-form">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">您的暱稱</label>
      <input type="text" class="form-control" id="${siteKey}-nickname" placeholder="請輸入暱稱" name="nickname">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">請輸入內容</label>
      <textarea class="form-control" name="content" rows="3" id="${siteKey}-content"></textarea>
    </div>
    <button class="btn btn-primary" type="submit" id="submit">提交</button>
  </form>
  <div class="container" id ="${siteKey}-message"></div>
  <div class="container-sm btn-container"> 
        <button type="button" class="btn btn-outline-secondary" id="${siteKey}-loadingBtn">載入更多</button>
  </div></div>`
  return template
}
export function addComment(datas, selector) {
  /* eslint-disable */
  for (let data of datas.discussion) {
    $(selector).append(`
    <div class="card">
      <div class="card-body">
      <h5 class="card-title">${escapeHtml(data.nickname)}</h5>
      <p class="card-text">${escapeHtml(data.content)}</p>
    </div>
    </div>
    `)
  }
}
export function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
