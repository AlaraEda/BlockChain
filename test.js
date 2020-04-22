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