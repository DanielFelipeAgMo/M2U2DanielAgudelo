
const Materias = [
    {'nombre':'ingles', 'valor':10000},
    {'nombre':'java', 'valor':12000},
    {'nombre':'golang', 'valor':14000},
    {'nombre':'php', 'valor':15000},
    {'nombre':'ruby', 'valor':16000},
    {'nombre':'python', 'valor':17000},
    {'nombre':'kotlin', 'valor':18000},
    {'nombre':'js', 'valor':19000},
    {'nombre':'perl', 'valor':20000},
    {'nombre':'c', 'valor':21000},
    {'nombre':'c#', 'valor':22000},
    {'nombre':'c++', 'valor':23000}
]        

const fijos={
    papeleria:20000,
    carnet:8000
}

function calcular() {
    let nombreEstudiante = document.getElementById('name').value
    if (nombreEstudiante === null) {
        alert("Es necesario diligenciar el campo nombre")
    }
    else{
    let = formMaterias=document.getElementsByName('materia[]')
    let response = ''
    response+='Nombre estudiante: '+ nombreEstudiante +'\n'
    response+='ESTOS SON LOS VALORES FACTURADOS POR MATERIAS'+'\n'
    let suma = 0
    for (let i = 0; i < formMaterias.length; i++) {
        const materia = formMaterias[i];
        if (materia.checked) {
            let claveArr=materia.value
            console.log(Materias[claveArr].nombre)
            suma = suma + Materias[claveArr].valor               
            response+='Materia : '+ Materias[claveArr].nombre + ' valor : $' + Materias[claveArr].valor + '\n'          
        }
    } 
    suma = suma + fijos.papeleria + fijos.carnet
    response+='COSTOS FIJOS '+'\n'    
    response+='Papelería : $'+ fijos.papeleria+ ' Carnet : $'+ fijos.carnet +'\n'
    response+='Subtotal : $'+ suma +'\n'
    response+='Descuento 20% : $'+ suma * 0.20 +'\n'
    let descuento = suma * 0.20
    suma = suma - descuento
    response+='Total a pagar : $' + suma    


    document.getElementById('result').innerText= response
    
    return true
}
}

function limpiar() {
    document.getElementById('formMatricula').reset();
  }
 
//const miFuncion=()=>{}
