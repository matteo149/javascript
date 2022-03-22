let password = 1234;

for (let i = 2; i >= 0; i--) {
   
    let cliente = prompt('como te llamas?')
    let clientePass = prompt('introducir password')
    if(clientePass == password){
        alert(cliente + ' puedes pasar')
        break;
    } else {    
        alert(cliente + ' tienes ' + i + 'tentativos restantes')
    }
}
