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
  let huruf = (await input("Masukan Karakter ? ")).toLowerCase();
  let arrHuruf = huruf.split("");
  let tamp = "";
  arrtamp = [];

  // console.log(arrHuruf.length);
  if (arrHuruf.length < 100) {
    if (arrHuruf.length % 2 == 1) {
      for (i = 0; i < arrHuruf.length; i++) {
        if (
          arrHuruf[i] === "a" ||
          arrHuruf[i] === "i" ||
          arrHuruf[i] === "u" ||
          arrHuruf[i] === "e" ||
          arrHuruf[i] === "o"
        ) {
          console.log("Dont't Vote The Player");
        } else {
          console.log("Vote The Player");
        }
      }
    } else {
      console.log("Vote The Player");
    }
  } else {
    console.log("Wrong Input");
  }

  process.exit();
};

main();
