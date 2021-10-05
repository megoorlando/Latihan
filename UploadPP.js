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

    let arrWH = []; 
    let validation = true;
    let lVal = await input ("Input L : ");
    let nVal = await input ("Input N : ");
    let arrTamp2 = [];
    for (let i=0; i < (+nVal); i++) {
        let photo = await input ("Photo " + (i+1) + " : ");
        let arrTamp = [...photo.split(' ').map(x=>Number(x))]; // convert isi dari array (element) menjadi number
        arrWH.push(arrTamp);
        if (arrWH[0] < 1 || arrWH[0] > 10000 || arrWH[1] < 1 || arrWH > 10000) {
            validation = false;
        }
        if ((+lVal) < 1 || (+lVal) > 10000 || (+nVal) < 1 || (+nVal) > 1000 || !validation) {
            console.log('Wrong Input')
        }else{
            let result = "";
            for (let i=0; i < arrWH.length;i++) {
                if ((+lVal) > arrWH[i][0] || (+lVal) > arrWH[i][1]) {
                    result = 'UPLOAD ANOTHER';
                }else if (arrWH[i][0] == arrWH[i][1]) {
                    result = 'ACCEPTED';
                }else{
                    result = 'CROP IT';
                }
            }
            arrTamp2.push(result);
        }
    }
    for(let j=0; j < arrTamp2.length; j++) {
        console.log(arrTamp2[j]);
    }
    process.exit()

}

main()