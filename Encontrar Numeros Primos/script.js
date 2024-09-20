function encontrarNumerosPrimos(inicio, fin) {
	let primos=[]
    for(let i=inicio;i<=fin;i++){
        let primo = true
        for(let valor = 2;valor<=(i/2);valor++){
            if(i % valor===0){
                primo= false 
                break
            }
        }
        if(primo){primos.push(i)}
        
    }
    return primos
}

console.log(encontrarNumerosPrimos(10, 50)); 
// Debería mostrar [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
