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

    let busType = await input("Business Type : ")
    let monIncome = await input("Monthly Income : ")
    let domicile = await input("Domicile : ")
    const aspects = (((50/100) * busType) + ((30/100) * monIncome) + ((20/100) * domicile))/3;
    let credit = "";
    if (aspects >60 && aspects <=75) {
        credit = 'C'
    }else if (aspects > 75 && aspects <=90) {
        credit = 'B'
    }else if (aspects > 90) {
        credit = 'A'
    }else {
        credit = 'D'
    }
    console.log('Total Value : ' + aspects)
    console.log('Credit Score : ' + credit)
    process.exit()

}

main()