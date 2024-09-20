function sheepCounter(numero,obejas){
    let obejasRojas=[]
    const na="NA"
    obejas.forEach(element => {
        element.name.toUpperCase().includes(na) && element.color.toUpperCase() == "RED"?
        obejasRojas.push(element)
        :null
    });
    console.log(`${obejasRojas.length} de ${numero} son rojas.`)
    return obejasRojas
}

console.log(sheepCounter(3, [
    { name: "noah", color: "blue" },
    { name: "euge", color: "red" },
    { name: "Ki Na Ma", color: "red" }
  ]))