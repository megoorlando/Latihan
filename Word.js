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
  function Count(str) {
    var upper = 0,
      lower = 0,
      number = 0,
      special = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] >= "A" && str[i] <= "Z") upper++;
      else if (str[i] >= "a" && str[i] <= "z") lower++;
      else if (str[i] >= "0" && str[i] <= "9") number++;
      else special++;
    }
    if (upper <= lower) {
      console.log(str.toLowerCase());
    } else if (upper > lower) {
      console.log(str.toUpperCase());
    }
    console.log("Upper case letters: " + upper);
    console.log("Lower case letters : " + lower);
    console.log("Number : " + number);
    console.log("Special characters : " + special);
  }

  // Driver function
  var str = await input("Masukan Karakter ? ");
  Count(str);

  // This code is contributed by rdtank.
  process.exit();
};
main();
