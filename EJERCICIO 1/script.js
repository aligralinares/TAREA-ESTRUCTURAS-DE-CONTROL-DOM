const userAge = document.getElementById('ageInput');

function verifyAge(){
    userAge.value >= 18 ? (alert("La persona es mayor de edad, porque su edad es de 18 o más.")) : (alert("La persona NO es mayor de edad, porque su edad es menor a 18."));
};