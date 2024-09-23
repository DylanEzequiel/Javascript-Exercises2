//Tu tarea es desarrollar un programa que, dada una secuencia de dígitos observados por el agente espía, determine todas las posibles combinaciones de dígitos que el objetivo pudo haber ingresado en el teclado. ¡Ayuda al agente a descubrir la clave secreta!

//teclado tipo 
//123
//456
//789
// 0
function secretPassword(numero){
    const valores=numero.split("")
    const panel={
        '1': ['1', '2', '4'],
        '2': ['2', '1', '3', '5'],
        '3': ['3', '2', '6'],
        '4': ['4', '1', '5', '7'],
        '5': ['5', '2', '4', '6', '8'],
        '6': ['6', '3', '5', '9'],
        '7': ['7', '4', '8', '0'],
        '8': ['8', '5', '7', '9'],
        '9': ['9', '6', '8'],
        '0': ['0', '8']
    }
    const posibles=[]
    valores.forEach(numero => {
        if(panel[numero]){
            posibles.push(`${numero}: ${panel[numero] }`)
        }
        else{
            posibles.push(`Valor Erroneo: ${numero}`)
        }
    }); 
    if(posibles.length ==0){
        return "No vio nada"
    }
    return posibles
}

console.log(secretPassword(""))