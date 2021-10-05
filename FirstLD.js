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
    let n = await input("Input : ")
    let arrTamp = [...n]
    console.log("First: " + arrTamp[0])
    console.log("Last: " + arrTamp[arrTamp.length - 1] )
    
    process.exit()

}

main()