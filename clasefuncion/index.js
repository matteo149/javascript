 class producto {
     constructor(id, nombre, precio, cantidad) {
         this.id = parseInt(id)
         this.nombre = nombre;
         this.precio = parseInt(precio);
         this.cantidad = parseInt(cantidad);

     }
     sumarIva() {
         this.precio = this.precio * 1.21;
     }
 }

 // producto
 const producto1 = new producto(1, 'aceite de oliva', 7, 200);
 const producto2 = new producto(2, 'aceite de coco', 4, 300);
 const producto3 = new producto(3, 'aceite de girasol', 3, 400);


 let prod1 = Object.values(producto1)
 let prod2 = Object.values(producto2)
 let prod3 = Object.values(producto3)
 let carrito = []

 function agregar() {
    const prep = prompt('press 1 si quieres aceite de oliva, 2 aceite de coco, 3 acete de girasol')
        if (prep == prod1[0]) {
            carrito.push(prod1)
        } else if (prep == prod2[0]) {
            carrito.push(prod2);
        } else if (prep == prod3[0]) {
            carrito.push(prod3);
        } else {
            alert('no selecionaste nada');
        }
 }

 
 agregar();

console.log(carrito);


 function cantidaComprar() {
    const quantity = prompt('CUANTA CANTIDAD')
    const intQuantity = parseInt(quantity)
     if (intQuantity > carrito[0][3]) {
         console.log('no tenemos tantos producto de este producto solo quedan ' + carrito[0][3]);
     } else {
         const total = intQuantity * carrito[0][2];
         console.log(`gracias pro haber comrado ${carrito[0][1]}, el total a pagar segun la cantidad que necesitas es de ${total}`);
     }
 }

 cantidaComprar();
 
 function repetir(){
        const pregunt = prompt('quieres comprar mas?')
        if(pregunt == 'si'){
           agregar()
           cantidaComprar()
     } else{
         console.log('gracias');
     }
     
 }
 repetir()
 



