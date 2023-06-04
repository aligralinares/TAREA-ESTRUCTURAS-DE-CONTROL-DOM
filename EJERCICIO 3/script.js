const nameInput = document.getElementById('name');
const salaryInput = document.getElementById('salary');
const categoryInput = document.getElementById ('categorySelect');

function calculateSalary (){
    let newSalary = 0;

    switch (categoryInput.value) {
        case 'A':
            newSalary = salaryInput.value * 0.15;
            break;
        case 'B':
            newSalary = salaryInput.value * 0.30;
            break;    
        case 'C':
            newSalary = salaryInput.value * 0.10;
            break;
        case 'D':
            newSalary = salaryInput.value * 0.20;
            break;
        default:
            break;
    };
    document.write("Nombre del trabajador: " + nameInput.value + "<br>" + "Salario: $" + salaryInput.value + "<br>" + "Categoria: " + categoryInput.value + "<br>" + "Aumento salarial: $" + newSalary);
};

