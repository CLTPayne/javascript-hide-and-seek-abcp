function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const total = document.querySelector('.ranked-list')
  for (let i = 0; i < total.length; i++) {total[i].innerHTML = (i + n)}
}