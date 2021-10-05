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
    let HH= 0, MM = 0, Over = 0
    let cin = await input("Input IN : ")
    let cout = await input("Input OUT : ")
    let inputIn = [...cin.split(":")]
    let inputOut = [...cout.split(":")]
    //--- 09:30 , 18:00
    if (+inputIn[0] < 1 || +inputIn[0] > 24 || +inputOut[0] < 1 || +inputOut[0] > 24) {
        console.log("Wrong Input")
    }else{
        if (+inputIn[1] < 0 || +inputIn[1] > 60 || +inputOut[1] < 0 || +inputOut[1] > 60) {
            console.log("Wrong Input")
        }else{
            // -- kondisi yg jam cek in harus lebih besar daripada jam cek out
            if (+inputIn[0] > +inputOut[0]) {
                console.log("Wrong Input")
            }else{
                // -- kondisi yang benar
                if (((+inputOut[1]) - (+inputIn[1])) < 0) {
                    MM = (+inputOut[1] + 60) - (+inputIn[1]);
                    HH = (+inputOut[0] - 1) - (+inputIn[0]);
                }else{
                    MM = (+inputOut[1]) - (+inputIn[1]);
                    HH = (+inputOut[0]) - (+inputIn[0]);
                }
                HH = HH + (MM/60)
                Over = Math.floor(HH - 9)
            }
        }
    } 
    console.log("Total working hours : " + HH + " Jam")
    let over = (Over * 20000)
    console.log("Overtime Wages : Rp." + over)
    process.exit()

}

main()