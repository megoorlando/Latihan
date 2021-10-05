const readline = require("readline");
const r1 = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})
const input = (Question) => {
    return new Promise(function(resolve, reject) {
        r1.question(Question, (answer1) => {
            try {
                resolve(answer1);
            } catch (err) {
                reject(err)
            }
        })
    })
}



const main = async() => {
    let start=220
    let bil = await input("masukan jumlah bilangan : ")

    if (+bil >0 && +bil <=10){
        for (let i=1; i<= +bil;){
            let total1 = 0
            for ( let j=1; j< start; j++){
                if(start % j===0){
                    total1 +=j
                }
            }
            let total2=0
            for (let k=1; k< total1; k++){
                if (total1 % k===0){
                    total2 = total2 + k
                }
            }
            if (start === total2){
                if (start!==total1){
                    console.log(start + "Bunshin dengan " + total1)
                    i++
                }
            }
            start++
        }
    }
    
    process.exit()

}
main()