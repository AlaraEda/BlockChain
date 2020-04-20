
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

//Check hoe groot de array is
if (output.length == 10){
    console.log(output);
    console.log("Lengte van de output:", output.length)
    console.log("Reeks is een veelvoud van 10")
}

if (output.length < 10){
    console.log(output);
    console.log("Lengte van de output:", output.length)
    console.log("Vul reeks aan tot het bestaat uit 10 gehele getallen.")

    for(let b = 0; b <10; b++){
        if (output.length<10){
            output.push(b)
        }
    }
}

if (output.length > 10 && output.length != 20){
    console.log(output);
    console.log("Lengte van de output:", output.length)
    console.log("Aanvullen tot er weer een tiental uitkomt.")

    for(let b = 0; b <20; b++){
        if (output.length<20){
            output.push(b)
        }
    }
}

console.log(output)
//------------------------------------------------------




