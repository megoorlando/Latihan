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
  let angka = await input("Masukan Angka ? ");
  let hasil = "";

  if (angka <= 50) {
    for (let i = 1; i <= angka; i++) {
      if (i % 2 != 0) {
        hasil += "Odd" + " ";
      } else {
        hasil += i + " ";
      }
    }
  } else {
    console.log("Max. Input Is 50");
  }
  console.log(hasil);

  process.exit();
};

main();
