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
    let lines = await input("Input Number : ")
    let tamp = "";
    if ((+lines) > 20) {
        console.log("Wrong Input");
    }else{
        for (let i=0; i < (+lines); i++) {
            tamp += "*";
        }
        console.log(tamp);
    }
    process.exit()

}

main()