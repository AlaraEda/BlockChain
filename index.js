
//My Code
let string = "tex";
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

    //Vul reeks aan met getallen.
    //Stop met aanvullen als output.length == 10
    //Vul array aan met output.push(+sCodes.charAt(o));


    let extraCijfers = '';
    for (let aanvullen = 0; aanvullen < 10; aanvullen++){
        // extraCijfers = extraCijfers + aanvullen
        // output.push(aanvullen.charAt(aanvullen))
    }
    console.log(extraCijfers)

    
}

if (output.length > 10 && output.length != 20){
    console.log(output);
    console.log("Lengte van de output:", output.length)
    console.log("Aanvullen tot er weer een tiental uitkomt.")
}

//------------------------------------------------------




