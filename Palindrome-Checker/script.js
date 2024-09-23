function palindrome(frase){
    let fraseSeparada=frase.toLowerCase().split("")
    console.log(fraseSeparada)
    let caracteresEspeciales="_ . , : ! ' ¿ ? ¡ @"
    
    let fraseFiltrada=fraseSeparada.filter(element=>!caracteresEspeciales.includes(element)).join("")
    let fraseFiltradaReversa=fraseSeparada.filter(element=>!caracteresEspeciales.includes(element)).reverse().join("")
    console.log(fraseFiltrada)
    console.log(fraseFiltradaReversa)
    if(fraseFiltrada==fraseFiltradaReversa){
        return `es un palindromo: ${fraseFiltrada} = ${fraseFiltradaReversa }`
    }
    else{
        return `No es un palindromo: ${fraseFiltrada} =/ ${fraseFiltradaReversa}`
    }
}

console.log(palindrome("race car!!"))