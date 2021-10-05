const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = Question => {
  return new Promise(function (resolve, reject) {
    r1.question(Question, answer1 => {
      try {
        resolve(answer1);
      } catch (err) {
        reject(err);
      }
    });
  });
};
const main = async () => {
  let angka = await input("Masukan angka : ");
  let hasil = 0;

  if (angka >= 0 && angka <= 50) {
    for (let i = 1; i <= +angka; i++) {
      if (i % 3 == 0 || i % 7 == 0) {
        hasil += i;
      }
    }
    console.log(hasil++);
  } else {
    console.log("Max. Input is 50");
  }

  process.exit();
};
main();
