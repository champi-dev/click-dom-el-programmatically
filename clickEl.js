  function clickEl(selector, sleepAfter) {
    /* 
      Example usage
      touchEl("svg[aria-label='Like']")
    */
    const el = document.querySelector(selector)
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
