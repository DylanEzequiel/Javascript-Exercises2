//cid array with currency on Register
//price is the price of the product
//cash is the money with that they pay

//it should return an object like this { status: "INSUFFICIENT_FOUNDS | CLOSED | OPEN", change:[values]}

function checkCashRegister(price,cash,cid){
    const currencyUnit = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
      };
      let vuelto = cash-price
      console.log(vuelto)
      let totalCid = cid.reduce((acc, curr) => acc + curr[1], 0);
      console.log(totalCid)
      if(vuelto < 0 ){
        return ({status:"INSUFFICIENT_FOUNDS",change:[0]})
      }
      if(vuelto === totalCid){
        return ({status:"CLOSED",change:cid})
      }
      let change = [];
      for (let i = 0; i < cid.length; i++) {
      // ! cada valor lo decostruyo
        let currencyName = cid[i][0];
        let currencyAmount = cid[i][1];
      // !Obtengo el valor y la unidad de cada cambio
        let currencyValue = currencyUnit[currencyName];
        let currencyAvailable = currencyAmount / currencyValue;
        let currencyToReturn = 0;
      // ! mentras que el vuelto sea mayor o igual al valor de la moneda actual y la moneda actual sea mayor a 0
        while (vuelto >= currencyValue && currencyAvailable > 0) {
      // ! Resto del vuelto el valor de la moneda
          vuelto -= currencyValue;
          vuelto = Math.round(vuelto * 100) / 100;
      // ! Resto la cantidad de plata disponble y aumento el vuelto a devolver
          currencyAvailable--;
          currencyToReturn++;
        }
  
        if (currencyToReturn > 0) {
          change.push([currencyName, currencyToReturn * currencyValue]);
        }
      }
  
      if (vuelto > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
      } else {
        return {status: "OPEN", change: change};
      }
    

        
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);