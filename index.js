function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.getElementById('#grand-node div div div div')
}

function increaseRankBy(n) {
  const total = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < total.length; i++) {total.parseInt(i) (i + n)}
}