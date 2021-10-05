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
  // code here
  let input2 = await input("Masukan Karakter ? "); //Chart
  let input1 = await input("Masukan Karakter ? "); //Test Case
  let array2 = input2.split("");
  let array1 = input1.split("");

  let array = [...input1];
  console.log(array);

  for (i = 0; i < input2.length; i++) {
    let hasil = "";
    for (j = 0; j < input1.length; j++) {
      if (array2[i] == array1[j]) {
        hasil += array1[j];
        array1[j] = "";
      }
    }
    console.log(array2[i] + "=>" + hasil);
  }

  console.log(array1.join(""));
  process.exit();
};
main();
