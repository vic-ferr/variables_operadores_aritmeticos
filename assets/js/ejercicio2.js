// Realizar operaciones con dos números.
// Pedir al usuario que ingrese dos números diferentes y mayores a cero. Para ambos
// números, calcular lo siguiente:


let numeroUno = parseInt (prompt("ingrese dos numeros enteros"));
let numeroDos = parseInt(prompt("ingrese dos numeros enteros"));
let resultado = numeroUno + numeroDos;


document.write("su resultado es " + resultado );

console.log(resultado);

let resultado2 = numeroUno - numeroDos;

document.write("<br><br> su resta es" + resultado2 );

let resultado3 = numeroUno * numeroDos;

document.write("<br><br> su multiplicacion es" + resultado3 );

let resultado4 = numeroUno / numeroDos;

document.write("<br><br> su division es" + resultado4 );

let resultado5 = numeroUno % numeroDos;

document.write("<br><br> su resto es" + resultado5 );
