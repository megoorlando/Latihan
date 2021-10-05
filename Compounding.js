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

    let kata = await input("Input kata : ")
    let arrInput = [...kata]
    let output = "";
    for (let i=0; i < arrInput.length; i++) {
        for (let j=0; j <=i; j++) {
            if (j == 0) {
                output += arrInput[i].toUpperCase()
            }else{
                output += arrInput[i].toLowerCase()
            }
        }
        if (i < arrInput.length - 1) {
            output += "-"
        }
    }
    console.log(output)
    process.exit()

}

main()