//Crea una función que encuentre todas las combinaciones de los números de una lista que suman el valor objetivo.

//La función recibirá una lista de números enteros positivos y un valor objetivo.
//Para obtener las combinaciones sólo se puede usar una vez cada elemento de la lista (pero pueden existir elementos repetidos en ella).
//Ejemplo: Lista = [1, 5, 3, 2], Objetivo = 6 Soluciones: [1, 5] y [1, 3, 2] (ambas combinaciones suman 6) (Si no existen combinaciones, retornar una lista vacía)

//! tengo dudas de como encararlo

function sumas(valores,objetivo){
    const respuesta=[]
    for(let i =1;i<=valores.length;i++){
        let suma=0
        valores.forEach(element => {
           suma=element+valores[i]
           if(suma==objetivo){
            respuesta.push(element,valores[i])
            suma=0
           }
        });
    }
    return respuesta
}

console.log(sumas([5,3,4,2,5],10))