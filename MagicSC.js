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
    let magic = await input ("Input Word/Sentence : ");
    let arrTamp = [...magic.replace(' ','')]
    for (let i =0; i < arrTamp.length;i++) {
        for (let j=i+1; j < arrTamp.length; j++) {
            if (arrTamp[i] === arrTamp[j]) {
                arrTamp.splice(j,1)// hilangkan n
                arrTamp.splice(i,0,arrTamp[i]) //sisipkan n
            }
        }
    }
    console.log(arrTamp.join(''))
    process.exit()

}

main()