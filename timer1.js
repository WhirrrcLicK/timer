var userInput = process.argv.slice(2);

const timerInput = function(input){
for (let x = 0; x < input.length; x++) {
  setTimeout(() => {
    process.stdout.write('\x07')
  }, input[x] * 1000)}
  if (input.length === 0) {
    clearTimeout
  }
}

timerInput(userInput)