const todo = document.querySelector('.addTodo')
todo.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && todo.value !== '') {
    createNote(todo.value)
    todo.value = ''
  }
})

function createNote(text) {
  const container = document.createElement('div')
  const node = document.createElement('p')
  const checkbox = document.createElement('button')
  const label = document.createElement('label')
  const btn = document.createElement('button')

  node.innerText = text
  container.classList.add('list')
  checkbox.setAttribute('id', 'checkbox')
  checkbox.style.display = 'none'
  label.classList.add('selectbox')
  label.setAttribute('for', 'checkbox')
  btn.classList.add('btn')
  container.appendChild(checkbox)
  container.appendChild(label)
  container.appendChild(node)
  container.appendChild(btn)
  document.querySelector('main').appendChild(container)

  container.addEventListener('click', (e) => {
    if (e.target === label) {
      container.classList.toggle('complete')
      label.classList.toggle('selectbox__on')
    }
    if (e.target === btn) btn.parentNode.remove()
  })
}
