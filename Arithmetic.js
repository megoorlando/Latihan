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
  let inisial = [5, 4, 3];

  let inputan = parseInt(await input(" Masukan Angka ? "));
  let hasil = "";
  let arrayHasil = [];

  for (i = 0; i < inputan / inisial.length; i++) {
    for (j = 0; j < inisial.length; j++) {
      // if(arrayHasil.length != inputan){
      arrayHasil.push(inisial[j] + 2 * i);
      // }
    }
  }

  // [1,3,5,7,3,5,7,9,5,7,9,11]
  //1 3 5 7 3 5 7 9
  arrayHasil = arrayHasil.slice(0, inputan);
  hasil = arrayHasil.join(" ");
  console.log(hasil);
  //console.log(Math.round(inputan / inisial.length));
  process.exit();
};

main();
