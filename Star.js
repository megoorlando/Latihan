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

    let star = await input("Input Star : ")
    console.log();
    console.log("Pattern A : ")
    let starA = "";
    for(let i=0;i < (+star); i++) {
        starA = "";
        for (let j=0;j < ((+star)-i); j++) {
            starA += "*"
        }
        console.log(starA);
    }
    console.log()
    console.log("Pattern B : ")
    let starB = "";
    for (i=0;i < (+star);i++) {
        starB = "";
        for (j=0;j < i;j++) {
            starB += " "
        }
        for (let j=0;j < ((+star) - i); j++) {
            starB += "*"
        }
        console.log(starB)
    }
    console.log();
    console.log("Pattern C : ")
    let starC = "";
    for (let i=0;i < (+star);i++) {
        starC = ""
        for (let j = 0;j < (+star) - i-1; j++) {
            starC +=" "
        }
        for (let j = 0;j <=i; j++) {
            starC += "*"
        }
        console.log(starC)
    }
    console.log()
    console.log("Pattern D : ")
    let starD = "";
    for (let i =0;i < (+star);i++) {
        starD = ""
        for(let j=0; j<= i;j++) {
            starD +="*"
        }
        console.log(starD)
    }
    process.exit()

}

main()