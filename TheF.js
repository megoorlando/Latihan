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

    let bil = await input("Input bilangan : ")
    let output = ""
    for (let i=1; i <= (+bil); i++) {
        if ((+bil) % i ===0) {
            output = output + i + " "
        }
    }
    console.log(output)
    process.exit()

}

main()