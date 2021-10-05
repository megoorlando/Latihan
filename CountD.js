const readline = require("readline");
const r1 = readline.createInterface(
    {
        input : process.stdin,
        output : process.stdout
    }
)

const input = (Question)=> {
    return new Promise(function(resolve,reject) {
        r1.question(Question, (answer1) => {
            try {
                resolve(answer1);
            }catch(err) {
                reject(err)
            }
        })
    })
}

const main = async () => {

    let lrk = await input("Input Bilangan [l r k] : ")
    let arrTamp = lrk.split(" ")
    let output = 0;
    for (let i=((+arrTamp[0]) + 1); i < (+arrTamp[1]); i++) {
        if (i % (+arrTamp[2]) === 0) {
            //console.log(i)
            output +=i;
            //output = output + i;
        }
    }
    console.log(output);
    process.exit()

}

main()