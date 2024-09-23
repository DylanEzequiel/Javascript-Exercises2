const romanNumerals = [
    {value: 1000, numeral: "M"},
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
    ];
function transformToRoman(valorNumerico){
    let result=""
    //por cada valor del array de valores numericosRomanos, si el numero es mayor a su valor guardo la letra y resto el valor al total numerico
        romanNumerals.forEach(valor => {
            while(valorNumerico >= valor.value){
                result+=valor.numeral
                valorNumerico-=valor.value
            }
        });
    return result
}

console.log(transformToRoman(2024))

//! crear la funcion inversa

function transformFromRoman(valorNumerico){
    let result=0
    //por cada valor del array de valores numericosRomanos, si el numero es mayor a su valor guardo la letra y resto el valor al total numerico
    let getNext=(x)=>{return romanNumerals.find(value=>value.numeral==x?.toUpperCase())}
    let arrayLetras=valorNumerico.toUpperCase().split("")
            arrayLetras.forEach((letra,index)=>{
                    let current=getNext(arrayLetras[index])
                    let next=getNext(arrayLetras[index+1])
                    if (next){
                        if( (next.value <= current.value) || (next.value == current.value)){
                            result+=current.value
                        }
                        else {
                            result-=current.value
                        }
                    }
                    else{
                        result+=current.value
                    }
                

            })
  
    return result
}

console.log(transformFromRoman("mmxxiv"))