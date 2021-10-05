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

    let arr = await input("Input Array : " )
    let seq = await input("Input Sequence : ")
    let arrTamp = [...arr.split(" ")]
    let arrTamp2 = [...seq.split(" ")]
    let counter = 0;
    let sorted = false
    for (let i=0; i < arrTamp.length; i++) {
        let num = arrTamp[i];
        if (arrTamp2[counter] === num) {
            counter++;
        }
        if (counter === arrTamp2.length) {
            sorted = true
            break;
        }
    }
    console.log(sorted)
    process.exit()

}

main()