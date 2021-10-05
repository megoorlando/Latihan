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
  let num = await input("Input Number : ");
  let mulai = 500;
  for (let i = 0; i < +num; i++) {
    console.log(i + mulai + " is Magic Number");
  }
  process.exit();
};
main();
