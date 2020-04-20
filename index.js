let string = "text";

for (let i = 0; i < string.length; i++) { 
    //Text omzetten naar ASC11- Waardes
    let theCode = string.charCodeAt(i);  
    
    //Getallen scheiden met een komma
    let output = [],
    sCodes = theCode.toString();

    for (let o = 0, len = sCodes.length; o < len; o += 1) {
        output.push(+sCodes.charAt(o));
        
    }
    
    console.log(output);
}

//console.log(String.fromCodePoint(101))              //ASC11-Waardes omzetten naar text.

let char = String.fromCharCode(688)
console.log(char)
