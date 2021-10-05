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

    let inputKata = await input("Input kata : ")
    let arrTamp = [...inputKata.toLowerCase()]
    //C o d i n g i d
    //B e l a j a r // N - 1
    //V i d h i G a n t e n g
    let mid = (arrTamp.length / 2);
    let max = arrTamp.length - 1;
    for (let i=0; i < mid; i++) {
        if (max >= mid) {
            console.log(arrTamp[i] + arrTamp[max])
            max--;
        }
    }
    process.exit()

}

main()