const todo = document.querySelector('.addTodo')
todo.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && todo.value !== '') {
    createNote(todo.value)
    todo.value = ''
  }
})

function createNote(text) {
  const container = document.createElement('div')
  container.innerHTML = `
    <button id="checkbox" style="display:none"></button>
    <label for="checkbox" class="selectbox"></label>
    <p>${text}</p>
    <button class="btn"></button>
    `
  container.classList.add('list')
  document.querySelector('main').appendChild(container)
}

const main = document.querySelector('main')
main.addEventListener('click', (e) => {
  const label = e.target.parentNode.querySelector('.selectbox')
  const btn = e.target.parentNode.querySelector('.btn')
  if (e.target === label) {
    e.target.parentNode.classList.toggle('complete')
    label.classList.toggle('selectbox__on')
  }
  if (e.target === btn) btn.parentNode.remove()
})
