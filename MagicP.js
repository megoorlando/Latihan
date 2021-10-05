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
    let num = await input("Input Number : ")
    let start = 100;
    for (let i=0; i < (+num);) {
        //console.log(i);
        let faktor1 = 0;
        // ini untuk menghitung 3 digit
        for (let j=1; j <= start; j++) {
            if (start % j === 0) {
                faktor1++;
            }
        }
        if (faktor1 === 2) {
            // ini bilangan prima untuk digit 3
            // 260
            let tamp1 = [...start.toString()]
            tamp1.splice(0,1); // 60
            //6 0
            //60
            const tamp2 = [...tamp1.map(x=>Number(x))].join('')
            let faktor2 = 0;
            // ini untuk menghitung 2 digit
            for (let k=1; k <= tamp2; k++) {
                if (tamp2 % k === 0) {
                    faktor2++;
                }
            }
            if (+faktor2 === 2) {
                // ini bilangan prima untuk digit 2
                let tamp3 = [...start.toString()]
                tamp3.splice(0,2) //0
                const tamp4 = [...tamp3.map(x=>Number(x))].join('');
                let faktor3 = 0;
                for (let l=1; l <= tamp4; l++) {
                    if (tamp4 % l === 0) {
                        faktor3++;
                    }
                }
                if (faktor3 === 2) {
                    console.log("# " + (i+1) + " Number => " + start);
                    i++;
                }
            }
        }
        start++;
    }
    process.exit()

}

main()