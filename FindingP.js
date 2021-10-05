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
  let n = await input("Masukan Angka ? ");
  let pembalik = 0;
  let a = "";
  if (n < 50) {
    for (let i = 1; i <= n; ++i) {
      pembalik = 0;
      for (var j = 2; j <= n; ++j) {
        if (i >= j && i % j == 0) {
          ++pembalik;
        }
      }
      if (pembalik == 1) {
        a = a + "Prime" + " ";
      } else {
        a = a + i + " ";
      }
    }
    console.log(a);
  } else {
    console.log("Max. Input is 50");
  }

  process.exit();
};

main();
