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
    let total = 1;
    let num = await input("Input Number : ")
    if ((+num) >=1 && (+num) <=20) {
        for (let i=+num; i>0; i--) {
            total *= i
        }
        console.log(total)
    }else{
        console.log('Wrong Input')
    }
    process.exit()

}

main()