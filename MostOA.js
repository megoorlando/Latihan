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
    let max = 0, most = 0;
    let error = false;
    let num = await input("Input Number : ")
    let arrTamp = [...num.split(" ")]
    // 1 2 4 5 7 3 2
    for (let i=0; i < arrTamp.length; i++) {
        let count = 1;
        for (let j=i+1; j < arrTamp.length; j++) {
            if (arrTamp[i] === arrTamp[j]) {
                count++;
            }
        }
        if (count > max) {
            max = count;
            most = arrTamp[i];
            error = false;
        }else if (count === max) {
            error = true;
        }
    }
    if (error === false) {
        console.log("Found " + most + " occurs " + max + " times")
    }else{
        console.log("Not Found");
    }
    process.exit()
}

main()