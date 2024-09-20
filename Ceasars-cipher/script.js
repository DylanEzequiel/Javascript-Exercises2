function cifradoCesar(fraseCodificada){
    const saltos=13
    const abc="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let respuesta=""

    for(let i=0;i<fraseCodificada.length;i++){
        if(abc.includes(fraseCodificada[i])){
            console.log(fraseCodificada[i])
            let p = abc.indexOf(fraseCodificada[i])
            //! este calculo se realiza para que el valor no exceda el tamaño del abc, y si excede cuente desde el inicio
            p= (p+saltos) % abc.length
            console.log(p)
            respuesta +=abc[p]
        }
        else{
            respuesta += fraseCodificada[i]
        }
    }
    return respuesta

}
console.log(cifradoCesar("HOLA! DHR GNY RFGNF?"))