
const fetch = require('node-fetch');            //Fetch functie voor node
const crypto = require('crypto');

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

    let hashData = data.blockchain.hash                         //Haal hash op vanuit de data. 
    hashData += data.blockchain.data[0].from
    hashData += data.blockchain.data[0].to
    hashData += data.blockchain.data[0].amount
    hashData += data.blockchain.data[0].timestamp
    hashData += data.blockchain.timestamp
    hashData += data.blockchain.nonce
    //console.log("hashdata", hashData)
    //hashData = '000078454c038871fa4d67b0022a30baaf25eaa231f8991b108e2624f052f3f8CMGTMiningCorporationBobPIKAB11548689513858154874778871610312'
    
    let deGehashteData = await newHash(hashData)
    console.log("degehastedata", deGehashteData)

    let datatoSolve = data.transactions[0].from
    datatoSolve += data.transactions[0].to
    datatoSolve += data.transactions[0].amount
    datatoSolve += data.transactions[0].timestamp
    datatoSolve += data.timestamp
    //datatoSolve = 'CMGTMiningCorporationBasBOOTB115487477332611548748101396'

    let i = 0
    let deGesolvdeData = await newHash(deGehashteData + datatoSolve)
    //console.log("Gesolvde: ", deGesolvdeData)
    //Zolang de "deGesolvdeData"-string niet met vier nullen begint... 
    while (!deGesolvdeData.startsWith('0000')){
        //console.log(deGesolvdeData)
        i++
        //figureoutnonce
        deGesolvdeData = await newHash(deGehashteData + datatoSolve + i )
        
    }
    console.log("Gesolvdedata: ",deGesolvdeData)
    console.log("nonce: ", i)
    checkNonce(i)
}

//Voeg je eigen block toe. 
function checkNonce(nonce){
    const body = { nonce: nonce, user: 'Alara Ilhan 0931871' };
    fetch('https://programmeren9.cmgt.hr.nl:8000/api/blockchain', {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => console.log(json));
}

async function newHash(string) {
    
    let output = []
    let stringHash = []                                                        //Maak array met de echte nummers
    
    //Loop door je string
    let newString = string.replace(/ /g, "")                                  //Haal spaties in je string weg. 

    for (let i = 0; i < newString.length; i++) {

        //Als er een getal zit in je string.
        if (newString.charAt(i)>= '0' && newString.charAt(i) <='9'){
            stringHash.push(parseInt(newString.charAt(i)))                     //Het getal dat in mijn string zit, stop ik in mijn stringHash.
        }
        else{
            //Text omzetten naar ASC11- Waardes
            stringHash.push(newString.charCodeAt(i));
        } 
    }
    //console.log("String", stringHash)

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


function Mod10(kolom1, kolom2, originalkolom, kolom3output = [], cijfer = 0){                                                             //Recursief?
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
