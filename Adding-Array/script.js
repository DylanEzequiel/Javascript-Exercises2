function sumArray(numbers) {
    const res=[]
    // separo los arrays por el /
    const separate=numbers.split("/")
    
    //los guardo segun su indice
    const values1=separate[0].split(",")
    const values2=separate[1].split(",")

    //valido que tengan el mismo tamaño
    if(values1.length == values2.length){
      //por cada valor tomo el indice y el valor, asi la suma se guarda en el nuevo array
      values1.forEach((element,index) => {
        res.push(Number(element)+ Number(values2[index]))
      });
      return res
    }
    return "ERROR Length desigual"
  } 
  sumArray("1,2,3/3,2,1"); // print in console (4,4,4)
  console.log(sumArray("1,3,4 / 2,3,1"))