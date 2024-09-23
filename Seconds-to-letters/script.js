const timeFormats = [
    {
      name: 'day', value: 86400
    },
    {
      name: 'hour', value: 3600
    },
    {
      name: 'minute', value: 60
    },
    {
      name: 'segundos', value: 1
    }
        ];

function segundosALetras(segundos){
    let result =[]
    let total = segundos
    timeFormats.forEach((time)=>{
          let cantidad = 0
            while(time.value <= total){
                total = total- time.value
                cantidad++
            }
            result.push({[cantidad]:time.name})
        })  
    
    return result
}

console.log(segundosALetras(89894))