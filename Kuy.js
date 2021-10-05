const { type } = require("os");
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
  let jumlah = await input("")
  let newInput = jumlah.split(" ")

  let tampungan = ""
  for(let i=1; i<=newInput[0]; i++){
    if(i % newInput[1] === 0){
      tampungan = tampungan + 'Kuy! '
    } else {
      tampungan = tampungan + i + " "
    }
  }
  console.log(tampungan)
  process.exit()
}
main();

  //itu lu liat gua bikin variable tampungan isinya string kosong. 
  //nah masuk ke looping trus di dalemnya ada kondisi trus action 
 // di dalem kondisinya ini gua ga langsung console disitu, tapi gua cuma tambahin ke string kosong tampungan tadi,
  //nah gua consolenya baru setelah looping