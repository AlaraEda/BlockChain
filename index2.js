let string = "text";
var resultOfTheCode ="";

for (let i = 0; i < string.length; i++) { 
    //Text omzetten naar ASC11- Waardes
    let theCode = string.charCodeAt(i);
    resultOfTheCode = resultOfTheCode + theCode  
}

//Getallen scheiden met een komma
let output = [],
sCodes = resultOfTheCode.toString();

for (let o = 0, len = sCodes.length; o < len; o += 1) {
    output.push(+sCodes.charAt(o));
}

console.log(output);


