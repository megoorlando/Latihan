let masuk = +"2010" + 1;
// let arrMasuk = masuk.split("");
let y = 0;
let final = 0;
//let tamp = [];
let check = true;

if (+masuk > 1000 && +masuk < 9000) {
  // for (i = 0; i < +masuk; ) {
  while (check == true) {
    masuk = masuk.toString();
    if (
      masuk[0] == masuk[1] ||
      masuk[0] == masuk[2] ||
      masuk[0] == masuk[3] ||
      masuk[1] == masuk[2] ||
      masuk[1] == masuk[3] ||
      masuk[2] == masuk[3]
    ) {
      masuk++;
    } else {
      check = false;
    }
  }
  console.log(masuk);
  // }
} else {
  console.log("Wrong");
}
