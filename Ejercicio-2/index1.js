const modal = document.getElementById('numbersForm');
let numeros = [];


function comprobar(){
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  let num3 = document.getElementById('num3').value;
  let num4 = document.getElementById('num4').value;
  let response=''

  if (num1 ==null || num2 ==null || num3 ==null || num4 ==null) {
    response+='Todos los campos deben estar diligenciados.'
    document.getElementById('res').innerText=response
  } else {
    numeros.push(num1, num2, num3, num4);
    let mayor = Math.max.apply(null,numeros);
    let menor = Math.min.apply(null,numeros);
    
    response+='Los números que ingresastes fueron : '+ num1 +','+ num2 +','+ num3 +' y '+ num4 +'\n'
    response+='El número mayor es: '+mayor+' y el número menor es: '+menor+'.'
  
    document.getElementById('res').innerText=response
    return true
  }
}

function limpiar(){
  document.getElementById('numbersForm').reset();  
}

   

  
  
    










