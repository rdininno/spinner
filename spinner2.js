let counter = 100;
const symbols = ['|', '/', '-', '\\', '|', '/', '-', '\\', '\n'];

for (let ii = 0; ii < symbols.length; ii++) {
  setTimeout(() => {
    process.stdout.write(`\r${symbols[ii]}`);
  }, counter);

  counter += 200;
}