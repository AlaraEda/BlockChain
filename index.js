
//My Code
let string = "text";
var theCode ="";
let output = []

//Loop door je string
for (let i = 0; i < string.length; i++) { 
    //Text omzetten naar ASC11- Waardes
    let ASC11 = string.charCodeAt(i);
    theCode = theCode + ASC11                 //Zorg ervoor dat cijfers op een rij staan.
}

//Zet elke getal los/gescheiden in een array.
let sCodes = theCode.toString();
for (let o = 0; o < sCodes.length; o ++) {
    output.push(+sCodes.charAt(o));           
}

console.log("Dit is de orginele output: ", output)
//Check hoe groot de array is
    if (output.length == 10){
        console.log("Lengte van de output:", output.length)
        console.log("Reeks is een veelvoud van 10")
        //Maar als je dit hebt, heb je dus geen twee rijen?
    }

    if (output.length < 10){
        console.log("Lengte van de output:", output.length)
        console.log("Vul reeks aan tot het bestaat uit 10 gehele getallen.")

        for(let b = 0; b <10; b++){
            if (output.length<10){
                output.push(b)
            }
        }
        //Maar als je dit hebt, heb je dus geen twee rijen?
    }

    if (output.length > 10 && output.length != 20){
        console.log("Lengte van de output:", output.length)
        console.log("Aanvullen tot er weer een tiental uitkomt.")

        for(let b = 0; b <20; b++){
            if (output.length<20){
                output.push(b)
            }
        }

        //Splits de array in twee aparte kolommen!
        kolom1 = output.slice(0,10)
        kolom2 = output.slice(10,20)
    }

console.log("Dit is de nieuwe gehele output:", output)
console.log("Dit is kolom1: ",kolom1)
console.log("Dit is kolom2: ",kolom2)

//------------------------------------------------------

//Doe Kolom1 + kolom2, creeer zo kolom3!
let kolom3output = []
for (let cijfer = 0; cijfer<10; cijfer++){
    let kolom3
    kolom3 = (kolom1[cijfer] + kolom2[cijfer]) % 10                             //Modules 10 word hier uitgevoerd.
    kolom3output.push(kolom3)
}
console.log("Dit is kolom3: ",kolom3output)




