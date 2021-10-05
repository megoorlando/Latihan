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

    let n = await input("Input N : ")
    let output = 0;
    for (let i=1;i <= (+n); i++) {
        if (i % 2 == 0) {
            // --ini berarti genap
        }else{  
            // -- ini ganjil
            output = output + i
        }
    }
    console.log(output)
    process.exit()

}

main()