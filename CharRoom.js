// function main() {
//   let s = read();
//   if (s.match(/.*h.*e.*l.*l.*o.*/)) console.log("YES");
//   else console.log("NO");
//   return 0;
// }

// var input = "ahhellllloou";
// var read;
// var writeline = x => process.stdout.write(x + "\n");
// var write = x => process.stdout.write(x);
// process.stdin.resume();
// process.stdin.setEncoding("utf8");
// process.stdin.on("data", chunk => (input += chunk));
// process.stdin.on("end", () => {
//   input = input.trim().split(/\s+/);
//   read = () => input.shift();
//   process.exit(main() || 0);
// });

//----------------------------------
let str = "helslo";

const kata = [...str];

let arr = ["h", "e", "l", "l", "o"];

let valid = true;

for (let index = 0; index < arr.length - 1; index++) {
  if (kata.indexOf(arr[index]) > kata.indexOf(arr[index + 1])) {
    valid = false;
  }

  kata[kata.indexOf(arr[index])] = "*";
}

if (!valid) {
  console.log("no");
} else if (valid == 5) {
  console.log("yes");
} else {
  console.log("NO");
}
