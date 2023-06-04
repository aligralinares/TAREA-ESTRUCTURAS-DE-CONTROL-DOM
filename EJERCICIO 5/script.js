/* EJERCICIO 5:  

Realizar una función para una tienda de coches en donde se deberá calcular: Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE el descuento será del 20%. Mostrar en HTML el coche seleccionado y el descuento que se aplicara en base a lo que selecciono el usuario.*/

const categoryInput = document.getElementById ('categorySelect');

function calculateDiscount (){
    let discount = 0;

    switch (categoryInput.value) {
        case 'FIESTA':
            discount = 0.5 * 100; 
            break;
        case 'FOCUS':
            discount = 0.10 * 100;
            break;    
        case 'ESCAPE':
            discount = 0.20 * 100;
            break;
        default:
            break;
    };
    document.write("Vehículo seleccionado: FORD " + categoryInput.value + "<br>" + "Descuento a aplicar: " + discount + "%");
};
