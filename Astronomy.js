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

    let isbn = await input ("Input ISBN : ")
    let arrJumlah = isbn.split("")
    //let arrJumlah = [...isbn]
    let tamp = 0;
    if (arrJumlah.length === 10) {
        for (let i=0; i < arrJumlah.length; i++) {
            tamp += (arrJumlah[i] * (i+1))
        }
        if (tamp % 11 === 0) {
            console.log("Legal ISBN")
        }else{
            console.log("Ilegal ISBN")
        }
    }else{
        console.log("Wrong ISBN")
    }
    //console.log(arrJumlah)
    process.exit()

}

main()