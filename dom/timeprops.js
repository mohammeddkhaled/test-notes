//setTimeout & setInterval.

// setTimeout(function, milliseconds, [arg1, arg2, ...])

document.querySelector('.delayed').textContent='this will change after 5 seconds'

setTimeout(()=>{
    document.querySelector('.delayed').textContent='delayed text'
}, 5000)
// clearTimeout()

// setInterval(function, milliseconds, [arg1, arg2,...])

setInterval(()=>console.log('this is running'),2000)
// clearInterval()

// alarm, timer