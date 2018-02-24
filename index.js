function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const total = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < total.length; i++) {total.parseInt(i) (i + n)}
}