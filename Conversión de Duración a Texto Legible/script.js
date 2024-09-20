function transformSeconds(segundos){
    if(segundos==0){return "AHORA"}
    if(segundos<0){return "PASADO"}
    // 60 seg = 1 min 3600 seg = 1 hora 86400 segs = 1 dia 31540000000 seg = 1 año 
    const valores=[["año/s",31536000],["mes/es",2592000],["dia/s",86400],["hora/s",3600],["min/s",60],["segundo/s",1]]
    let res={}
    let total=segundos
    console.log(total)
    //por cada valor obtengo su cantidad y pongo un contador por las unidades que puede ser dividido
    valores.forEach((value)=>{
            const nombre=value[0]
            let valorVolver = 0;
            while(total >= value[1]){
            //divido por el total por el valor del momento y aumento el contador en 1
                total -=value[1]
                valorVolver++
            }
            //si el contador es mayor a 1 mando el valor a volver a un objeto con su nombre
            valorVolver>0? res={...res, [nombre]:valorVolver}:null
    })
    return res

}

console.log(transformSeconds(3154008640))