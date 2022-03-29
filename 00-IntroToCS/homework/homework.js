'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  const arreglo = num.toString().split("").reverse();
  let resultado = 0;
  for(var i = arreglo.length-1; i >= 0 ; i--){
      resultado += parseInt(arreglo[i]*(2**i));
  }
  return resultado;
}

function DecimalABinario(num) {
  // tu codigo aca
  const residuos = [];
  while(num != 0){
      if(num % 2 === 0){
          residuos.unshift(0);
      }else{
          residuos.unshift(1);
      }
      num = Math.floor(num / 2);
  }
  return residuos.join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}