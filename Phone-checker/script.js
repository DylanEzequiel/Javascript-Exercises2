function validadorNumber(numero){
    let regEx= /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/
    return regEx.test(numero)
}

console.log(validadorNumber("1(444)555-5555"))