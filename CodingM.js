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
    let maze = await input("Input String : ")
    let arrInput = [...maze.toLowerCase()]
    let x=0,y=0;
    if (arrInput.length < 1 || arrInput.length > 200) {
        console.log('Wrong Input')
    }else{
        let pattern = 'lrud', count=0
        for (let i=0; i < arrInput.length; i++) {
            if (pattern.includes(arrInput[i])) {
                switch (arrInput[i]) {
                    case 'l' :
                        x--
                        break;
                    case 'r' :
                        x++
                        break;
                    case 'u' :
                        y++
                        break;
                    case 'd' :
                        y--
                        break;
                }
            }else{
                console.log('Wrong Input')
                process.exit(0)
            }
        }
    }
    console.log(x + ' ' + y)
    process.exit()

}

main()