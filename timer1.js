var timers = process.argv.slice(2)

const timer = function(input) {
setTimeout(() => {
  process.stdout.write('\x07')
}, input * 1000);

}

timer(timers)