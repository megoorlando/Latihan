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
    let star = await input("Input Star : ");
    if ((+star) < 1 || (+star) > 20 ) {
        console.log("Input must be 1 - 20")
    }else{
        star = (star * 2) + 1;
        let k = (+star);
        let placeholder
        for (let i=1; i <= (+star); i++) {
            placeholder = "";
            for (j=1; j <= (+star); j++) {
                if ((i === j) && (j !== k)) {
                    placeholder += "*"; 
                }else if (j === k) {
                    placeholder += "*";
                    k--;
                }else {
                    placeholder +=" ";
                }
            }
            console.log(placeholder);
        }
    }
    process.exit()

}

main()