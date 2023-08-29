let spinState = ["|", "/", "-", "\\"]
let timeout = 100;
for (let i = 0; i <= 3; i++) {
  for (let spin of spinState) {
    setTimeout(() => {
      process.stdout.write("\r" + spin + "   ")
    }, timeout);
    timeout += 200;
  }
}