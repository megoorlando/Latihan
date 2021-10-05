const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = (Question) => {
  return new Promise(function (resolve, reject) {
    r1.question(Question, (answer1) => {
      try {
        resolve(answer1);
      } catch (err) {
        reject(err);
      }
    });
  });
};

const main = async () => {
  // code here
  function laptop(beli, jangka, keuntungan) {
    let output = 0;
    for (let i = 0; (i = jangka); i++) {
      output = beli - (beli * keuntungan) / 100;
      invest = output;
    }
    //console.log(output);
    return output;
  }
  coba = laptop(10000000, 5, 1);
  process.exit();
};
main();
