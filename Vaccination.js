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
  let kode = await input(""); //ACH100138215
  let kode1 = String(kode)
    .split("")
    .map(kode => {
      return Number(kode);
    });

  let valid = true;
  for (let i = 0; i < 3; i++) {
    if (kode[i] != kode[i].toUpperCase() || isNaN(kode1[i])) {
      valid = false;
    }
  }
  for (let index = 3; index <= kode1.length; index++) {
    if (isNaN(kode1[index])) {
      valid = false;
    }
  }
  if (!valid || kode.length != 12) {
    console.log("Wrong Vaccination Code");
  } else {
    console.log("Right Vaccination Code");
  }

  process.exit();
};
main();
