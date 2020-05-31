function clickEl({ selector, sleepAfter, element }) {
  const el = element || document.querySelector(selector)
  const { x, y } = el.getBoundingClientRect()

  el.dispatchEvent(
    new MouseEvent('click', {
      clientX: x,
      clientY: y,
      isTrusted: true,
      bubbles: true
    }))
  // console.log('Clicked ' + selector)

  return new Promise((resolve, reject) => {
    setTimeout(resolve, sleepAfter)
  })
}
