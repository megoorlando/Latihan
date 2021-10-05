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
    let div =2; 
    let cekd = 0; 
    let rslt = "";
    let num = await input("Input Number : ");
    for (let i=0; i < +num; i++) {
        if (num % div ===0) {
            num = num/div
            if (div !== cekd) {
                rslt += div + ' '
            }
            cekd = div
        }else{
            div++
        }
    }
    if (!rslt.includes(num)) {
        rslt += num + ' '
    }
    console.log(rslt)
    process.exit()

}

main()