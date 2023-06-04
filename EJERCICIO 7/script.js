/* Realizar programa para una web, en el cual el usuario introduce 2 notas y su valor ponderado (como cuando un examen vale un 30% y otro examen el 70%). Pulsando el botón “Calcula”, la web muestra como resultado la nota media ponderada.  */

const firstScore = document.getElementById('firstScore');
const secondScore = document.getElementById('secondScore');
const firstWeighing = document.getElementById ('firstWeighing');
const secondWeighing = document.getElementById ('secondWeighing');


function getScore(){
    var finalScore = firstScore.value * (firstWeighing.value / 100) + secondScore.value * (secondWeighing.value / 100);
    alert(`Nota Final: ${finalScore}`);
};