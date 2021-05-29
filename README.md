> https://www.patreon.com/champipatreon

# Usage

<img src="https://firebasestorage.googleapis.com/v0/b/devsarmico-portfolio.appspot.com/o/ezgif.com-video-to-gif-compressor.gif?alt=media&token=a50c14bc-2497-42f8-9498-9fec0a3b8a58" />

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
