const firstNumber = document.getElementById('first');
const secondNumber = document.getElementById('second');

function largerNumber (){
    let substraction = firstNumber.value - secondNumber.value;

    if(substraction > 0){
        alert(`El número mayor es el primer número: ${firstNumber.value}`);
    } else if(substraction < 0){
        alert(`El número mayor es el segundo número: ${secondNumber.value}`);
    } else if(substraction == 0){
        alert("Los números son iguales");
    };
};