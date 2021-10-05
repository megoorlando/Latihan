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

    let bil = await input("Input Bilangan : ")
    let st = await input("Input sort type [Desc/Asc]: ")
    let tamp = [];
    for (let i=1;i <= bil;i++) {
        tamp.push(i)
    }

    //---- lihat isi array tamp ---//
    // for (let j=0; j<tamp.length; j++) {
    //     console.log(tamp[j])
    // }
    let output = "";
    if (st.toLowerCase() === "desc") {
        tamp.sort(function(a, b) {return a - b;});
        tamp.reverse()

        for (let j=0; j<tamp.length; j++) {
            output += tamp[j].toString()
        }
        console.log(output)
        console.log("Desc")
    }else if (st.toLowerCase() === "asc") {
        //tamp.sort()
        tamp.sort(function(a, b) {return a - b;});
        for (let j=0; j<tamp.length; j++) {
            output += tamp[j].toString()
        }
        console.log(output)
        console.log("Asc")
    }else{
        console.log("Wrong Input")
    }
    process.exit()

}

main()