function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(id, class) {
  document.querySelectorAll(id, class)
}