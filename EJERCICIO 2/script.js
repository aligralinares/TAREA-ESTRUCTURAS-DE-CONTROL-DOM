const nameInput = document.getElementById('name');
const carnetInput = document.getElementById('carnet');
const testInput = document.getElementById ('testScore');
const homeworkInput = document.getElementById ('homeworkScore');
const attendanceInput = document.getElementById ('attendanceScore');
const researchInput = document.getElementById ('researchScore');

function getScore(){
    var finalScore = testInput.value * 0.20 + homeworkInput.value * 0.40 + attendanceInput.value * 0.10 + researchInput.value * 0.30;
    alert(`Alumno: ${nameInput.value}\nCarnet: ${carnetInput.value}\nNota Final: ${finalScore}`)
}