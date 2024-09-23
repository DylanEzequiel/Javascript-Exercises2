function sumaValores(stringNumbers){
    let array=stringNumbers.split(",")
    let result =0
    array.forEach(element => {
        result += Number(element)
    });
    return result
}

console.log(sumaValores("1,23,41,23"))