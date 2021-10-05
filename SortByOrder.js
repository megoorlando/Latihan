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
  let word = (await input("Masukan Kata ? ")).toLowerCase().replace(/\s/g, "")
  let arrayWord = word.split("");
  let result = [];
  // console.log(arrayWord)
  for (i = 0; i < arrayWord.length; i++) {
    //console.log(i)
    if (arrayWord[i] !== " ") {
      for (j = i + 1; j < arrayWord.length; j++) {
        //    console.log(j)
        if (arrayWord[i] === arrayWord[j]) {
          result.push(arrayWord[i]);
          arrayWord.splice(j, 1);
          // console.log(arrayWord[i])
        }
      }
      result.push(arrayWord[i]);
    }
    // console.log(result.join(""))
  }
  console.log(result.join(""));

  process.exit();
};
main();
