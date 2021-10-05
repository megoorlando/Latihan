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

    let x_bricks = await input("Input X_Brick : ")
    let t_bricks = await input("Input Total Bricks : ")
    let adhit = 0, yoga = 0
    for (let i=0; i < (+t_bricks); i++) {
        if (adhit < (+x_bricks)) {
            adhit++;
        }else if (yoga < ((+x_bricks) * 3)) {
            yoga++;
        }else{
            adhit = 1, yoga = 0;
        } 
    }
    if (yoga > 0) {
        console.log("Yoga")
    } else {
        console.log("Adhit")
    } 
    process.exit()

}

main()