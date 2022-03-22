// let anos = parseInt(prompt('cuantos anos tienes'))

// if(anos > 18){
//     alert('pasa')
// } else {
//     alert('no puedes entrar');
// }

// let n1 = 'pablo';
// let n2 = 'matteo';
// let n3 = 'marco';

// let trabajador = prompt('como te llamas?')

// if((trabajador == n1) || (trabajador == n2) || (trabajador == n3)){
//     console.log('pasa ' + n1)
// }else{
//     console.log('no rabajas aqui no puedes pasar')
// }



for (let i = 3; i >= 0; i--) {
    let password = 1234;
    let cliente = prompt('como te llamas?')
    let clientePass = prompt('introducir password')
    if(clientePass == password){
        alert(cliente + ' puedes pasar')
        break;
    } else {    
        alert(cliente + ' tienes ' + i + 'tentativos restantes')
    }
}
