// Code your solutions in this file
function printBadges(ar) {
  for (let i = 0; i<ar.length; i++) {
    console.log(`Welcome ${ar[i]}! You are employee #${i+1}.`)
  }
  return ar;
}

function tailsNeverFails() {
  let tails = 0;

  while (Math.random() >= 0.50) {
    tails++;
  }

  return `You got ${tails} tails in a row!`;
}
