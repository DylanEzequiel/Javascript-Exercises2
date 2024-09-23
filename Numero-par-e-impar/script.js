function parImpar(Numbers){
    let result=[]
    let arrayNumbers=Numbers.split(",")
    arrayNumbers.forEach(element => {
        if(element%2==0){
            result.push({[element]:"Par"})
        }
        else{
            result.push({[element]:"Impar"})

        }
    });
    return result
}


console.log(parImpar("1,2,3,4,5"))
