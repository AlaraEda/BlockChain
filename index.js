
const fetch = require('node-fetch');            //Fetch functie voor node
const crypto = require('crypto');

//My Code
// var theCode ="";
let output = []
let stringHash = []//Maak array met de echte nummers


//Functie haalt de laatst aangemaakte block op. 
async function getLatestBlock(){
    let response = await fetch('https://programmeren9.cmgt.hr.nl:8000/api/blockchain/next')
    let data = await response.json()

    return data
}

createHash()
async function createHash(){
    const data = await getLatestBlock()                         //Haal de data van de latest make block op. 
    //console.log(data)

    let hashData = data.blockchain.hash                       //Haal hash op vanuit de data. 
    hashData += data.blockchain.data[0].from
    hashData += data.blockchain.data[0].to
    hashData += data.blockchain.data[0].amount
    hashData += data.blockchain.data[0].timestamp
    hashData += data.blockchain.timestamp
    hashData += data.blockchain.nonce
    hashData = '000078454c038871fa4d67b0022a30baaf25eaa231f8991b108e2624f052f3f8CMGTMiningCorporationBobPIKAB11548689513858154874778871610312'
    
    let deGehashteData = await newHash(hashData)
    //console.log(deGehashteData)

    datatoSolve = data.transactions[0].from
    datatoSolve += data.transactions[0].to
    datatoSolve += data.transactions[0].amount
    datatoSolve += data.transactions[0].timestamp
    datatoSolve += data.timestamp
    datatoSolve = 'CMGTMiningCorporationBasBOOTB115487477332611548748101396'


    let i = 0
    let deGesolvdeData = await newHash(deGehashteData + datatoSolve)

    //Zolang de "deGesolvdeData"-string niet met vier nullen begint... 
    while (!deGesolvdeData.startsWith('0000')){
        //console.log(deGesolvdeData)
        i++
        deGesolvdeData = await newHash(hashData + datatoSolve + i )
        console.log(i)
    }
    console.log(deGesolvdeData)

    //checkNonce(i)
}

//Voeg je eigen block toe. 
function checkNonce(nonce){
    fetch('https://programmeren9.cmgt.hr.nl:8000/api/blockchain', {
        method: 'post',
        body: {        
            'nonce': nonce,
            'user': 'Alara Ilhan 0931871'
        },
        headers: {'Content-Type': 'application/json'},
    })
    .then (res => res.json())
    .then(json => console.log(json));
}

async function newHash(string) {
    //Loop door je string
    for (let i = 0; i < string.length; i++) {

        //Als er een getal zit in je string.
        if (string.charAt(i)>= '0' && string.charAt(i) <='9'){
            stringHash.push(parseInt(string.charAt(i)))                     //Het getal dat in mijn string zit, stop ik in mijn stringHash.
        }
        else{
            //Text omzetten naar ASC11- Waardes
            stringHash.push(string.charCodeAt(i));
        } 
    }

    //Zet elke getal los/gescheiden in een array.
    let sCodes = stringHash.join('');
    //console.log(sCodes)
    for (let o = 0; o < sCodes.length; o ++) {
        output.push(parseInt(sCodes.charAt(o)))                             //ParseInt maakt er een int van.            
    }

    //Voeg cijfers erbij zodat je een array van 10 getallen hebt. 
    for(let b = 0; (output.length %10) !=0 ; b++){                          //Is de lengte van de output deelbaar 10, zolang het antwoord niet 0 is, ga door. 
        output.push(b)
    }

    //console.log("Dit is de orginele output: ", output)

    let mod10 = await Mod10(output.splice(0,10), output.splice(0,10), output)
    return mod10

}
    //Check hoe groot de array is
    // if (output.length == 10){
    //     console.log("Lengte van de output:", output.length)
    //     console.log("Reeks is een veelvoud van 10")
    //     //Maar als je dit hebt, heb je dus geen twee rijen?
    // }


    // if (output.length < 10){
    //     console.log("Lengte van de output:", output.length)
    //     console.log("Vul reeks aan tot het bestaat uit 10 gehele getallen.")

    //     for(let b = 0; b <10; b++){
    //         if (output.length<10){
    //             output.push(b)
    //         }
    //     }
    //     //Maar als je dit hebt, heb je dus geen twee rijen?
    // }

    // if (output.length > 10 && output.length != 20){
    //     console.log("Lengte van de output:", output.length)
    //     console.log("Aanvullen tot er weer een tiental uitkomt.")

    //     for(let b = 0; b <20; b++){
    //         if (output.length<20){
    //             output.push(b)
    //         }
    //     }

    //     //Splits de array in twee aparte kolommen!
    //     kolom1 = output.slice(0,10)
    //     kolom2 = output.slice(10,20)
    // }

    // //Werkt deze nog effe bij.
    // if (output.length > 20 && output.length != 30){
    //     console.log("Lengte van de output:", output.length)
    //     console.log("Aanvullen tot er weer een tiental uitkomt.")

    //     for(let b = 0; b <30; b++){
    //         if (output.length<30){
    //             output.push(b)
    //         }
    //     }

    //     //Splits de array in twee aparte kolommen!
    //     kolom1 = output.slice(0,10)
    //     kolom2 = output.slice(10,20)
    //     kolom3 = output.slice(20,30)
    // }
    

// console.log("Dit is de nieuwe gehele output:", output)
// console.log("Dit is kolom1: ",kolom1)
// console.log("Dit is kolom2: ",kolom2)

//------------------------------------------------------

async function Mod10(kolom1, kolom2, originalkolom, kolom3output = [], cijfer = 0){                                                             //Recursief?
    //Doe Kolom1 + kolom2, creeer zo kolom3!
    
    //console.log("Dit is de original kolom:", originalkolom.length)
    if (kolom3output.length <10){
        kolom3output.push((kolom1[cijfer] + kolom2[cijfer]) % 10)                  //Modules 10 word hier uitgevoerd.
        cijfer++

        return Mod10(kolom1, kolom2, originalkolom, kolom3output, cijfer)
    }

    else if (originalkolom.length > 1){
        return Mod10(kolom3output, originalkolom.splice(0,10), originalkolom)
    }

    else {
        //return kolom3output en stuur het door makehashfunctie.
        
        return makeHash(kolom3output)
    }
}

function makeHash(kolom3output){
    //console.log("Dit is kolom3: ",kolom3output)
    //console.log("Alles op een rij:", kolom3output.join(''));                           //Tekst naast elkaar.

    const hash = crypto.createHash('sha256').update(kolom3output.join('')).digest('hex');
    //console.log(hash)
    return hash
}
