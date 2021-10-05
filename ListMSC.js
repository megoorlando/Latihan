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
    let count = await input ("");
    let arrTamp2 = [];
    for (let i=0; i < (+count); i++) {
        let inputSentence = await input("");
        ///-- lanjut prosesnya ---//
        let arrTamp = [...inputSentence.replace(" ","")] //--menghilangkan spasinya --//
        for (let j=0; j < arrTamp.length; j++) {
            for (let k=j+1; k < arrTamp.length; k++) {
                //AkuSukaIkan
                //AkkkuuSxxxx
                if (arrTamp[j] === arrTamp[k]) {
                    arrTamp.splice(k,1); // menghapus karakter yang sama //
                    arrTamp.splice(j, 0, arrTamp[j]) // menambahkan karakter yang sama disebelahnya
                }
            }
        }
        arrTamp = arrTamp.join('')
        arrTamp2.push(arrTamp);
    }
    for (let l=0; l < arrTamp2.length; l++) {
        console.log(arrTamp2[l]);
    }
    process.exit()
}

main()