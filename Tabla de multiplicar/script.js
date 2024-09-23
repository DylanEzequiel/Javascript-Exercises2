const tablaDeMultiplicar = (num) => {
    let result =[]
	for(let i=1;i<=10;i++){
        result.push(`${num} x ${i} = ${num*i}`)
    }
    return result
}
console.log(tablaDeMultiplicar(8)
)