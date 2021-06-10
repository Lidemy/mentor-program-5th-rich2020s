const element = document.querySelector('.page__questions')
element.addEventListener('click', (e) => {
  if (e.target.classList.contains('ques__answer')) return
  for (let i = 0; i < e.path.length - 2; i++) {
    if (e.path[i].getElementsByClassName('ques__answer')[0]) {
      e.path[i].getElementsByClassName('ques__answer')[0].classList.toggle('show')
      break
    }
  }
})
