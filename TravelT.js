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
    let validation = true; 
    let mm=0, hh=0;
    let depart = await input("Departure Time[hh:mm] : ");
    let travel = await input("Travel Time[hh:mm] : ")
    let arrDepart = [...depart.split(':').map(x=>Number(x))];// convert element dari array jadi number
    let arrTravel = [...travel.split(':').map(x=>Number(x))];// convert element dari array jadi number
        if (+arrDepart[0] < 0 || +arrDepart[0] >23 || 
            +arrDepart[1] < 0 || +arrDepart[1] > 59 || 
            +arrTravel[0] < 0 || +arrTravel[0] >23 ||
            +arrTravel[1] < 0 || +arrTravel[1] > 59) {
                validation = false
            } 
            if (!validation) {
                console.log('Input Invalid Time')
                process.exit(0)
            }else{ 
                mm = +arrDepart[1] + +arrTravel[1]
                hh = +arrDepart[0] + +arrTravel[0]
                if (mm > 59) {
                    mm -= 60
                    hh++
                }
                if (hh > 23) {
                    hh -= 24
                }
            }
    console.log('Arrive Time : ' + hh + ':' + mm)
    process.exit()
}

main()