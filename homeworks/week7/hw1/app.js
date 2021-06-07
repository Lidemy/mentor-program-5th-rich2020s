let necessary = true

const element = document.querySelector('.form')
const inputs = element.querySelectorAll('input')
for (const input of inputs) {
  if (input.name === 'advice' || input.name === 'submit' ||
    input.type.toLowerCase() === 'radio') continue
  insertWarn(input)
}

element.addEventListener('submit', (e) => {
  e.preventDefault()
  necessary = true
  const type = element.querySelectorAll('input[name=報名類型]')
  checkText(inputs)
  checkOption(type)
  if (necessary === true) alert(printData())
})

function printData() {
  const values = {}
  const inputs = element.querySelectorAll('input')
  for (let i = 0; i < inputs.length - 1; i++) {
    if (inputs[i].type.toLowerCase() === 'radio') {
      if (inputs[i].checked) values[inputs[i].name] = inputs[i].id
    } else {
      values[inputs[i].name] = inputs[i].value
    }
  }
  return JSON.stringify(values)
}

function checkOption(inputs) {
  const type = document.querySelector('.type')
  const div = document.createElement('div')
  div.classList.add('warn')
  div.innerHTML = '此處不可為空'
  type.appendChild(div)
  for (const input of inputs) {
    if (input.checked) {
      if (type.querySelector('.warn').classList.contains('display__warn')) {
        type.querySelector('.warn').classList.remove('display__warn')
      }
      return
    }
  }
  type.querySelector('.warn').classList.add('display__warn')
  necessary = false
  // type.classList.add('display__warn')
}

function checkText(inputs) {
  for (const input of inputs) {
    if (input.name === 'advice' || input.name === 'submit' ||
     input.type.toLowerCase() === 'radio') continue
    if (input.value === '') {
      input.nextSibling.classList.add('display__warn')
      necessary = false
    } else if (input.nextSibling.classList.contains('display__warn')) {
      input.nextSibling.classList.remove('display__warn')
    }
  }
}

function insertWarn(location) {
  const div = document.createElement('div')
  div.classList.add('warn')
  div.innerHTML = '此處不可為空'
  location.parentNode.insertBefore(div, location.nextSibling)
}
