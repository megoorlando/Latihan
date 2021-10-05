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
    let xo = await input("Input Number : ");
    let tamp = "";
    if ((+xo) > 40) {
        console.log("Wrong Input");
    }else{
        for (let i=1; i <= (+xo); i++) {
            if (i % 2 === 0) {
                tamp += "O";  
            }else{
                tamp += "X"; 
            }
        }
        console.log(tamp);
    }
    process.exit()

}

main()