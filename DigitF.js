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
    //145
    let subtotal = 0, total = 0
    let num = await input("Input Number : ")
    let arrTamp = num.split("");
    for (let i=0; i < arrTamp.length; i++) {
        subtotal = 1;
        for (let j=1; j <= arrTamp[i]; j++) {
            subtotal *=j;  
        }
        total += subtotal;
        //console.log(arrTamp[i]);
    }
    console.log(total);
    process.exit()
}

main()