# Usage
## Basic
copy and paste the `clickEl` function to the console and
use it like this `clickEl({ selector: "svg[aria-label='Like']" })`

## As promise after click
```
(async () => {
  await clickEl({
    selector: "svg[aria-label='Like']", 
    sleepAfter: 300
  })
  
  await clickEl({
    element: Array.from(document.querySelectorAll('button'))
    .find(el => el.textContent === 'Follow') 
  })
})()
```
