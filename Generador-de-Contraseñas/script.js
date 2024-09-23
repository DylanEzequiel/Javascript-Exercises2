// Example generator de random values
console.log(Math.random() < 0.1); //10% probability of getting true
console.log(Math.random() < 0.4); //40% probability of getting true
console.log(Math.random() < 0.5); //50% probability of getting true
console.log(Math.random() < 0.8); //80% probability of getting true
console.log(Math.random() < 0.9); //90% probability of getting true


function generaContraseña(length,Mayusculas,Especiales){
    const Letras="abcdefghijklmnñopqrstvwxyz"
    const LetrasNumeros="abcdefghijklmnñopqrstvwxyz1234567890"
    const caracteresExtra="!@#$%&/{}?¿¡_-*"
    const contraseña=[]
    if(length > 0 && Mayusculas || Especiales ){
        for(let i=0;i<=length ; i++){
            if(Mayusculas && Math.random() < 0.4){
                let index= Math.ceil((Math.random()*100)%Letras.length);
                console.log(index);
                contraseña.push(Letras[index]?.toUpperCase());
            }
            else if(Especiales && Math.random() < 0.4){
                let index= Math.ceil((Math.random()*100)%caracteresExtra.length);
                console.log(index);
                contraseña.push(caracteresExtra[index]?.toUpperCase());
            }
            else{
                let index= Math.ceil((Math.random()*100)%LetrasNumeros.length)
                contraseña.push(LetrasNumeros[index])
            }
        }
    }
    console.log(contraseña.join(""))
}

generaContraseña(12,true,false)