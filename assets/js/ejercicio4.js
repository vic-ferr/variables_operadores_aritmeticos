// Crear un programa que pida al usuario una cantidad de días y que muestre su
// equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el
// resultado debe ser 1 año, 1 semana y 1 día.
// Se debe considerar lo siguiente:





const day = parseInt(prompt("ingrese los dias"));

  year = Math.trunc( day / 365);
  week = Math.trunc((day % 365 ) /7);
  dias = Math.trunc(( day % 365 ) % 7)

  console.log("Son : años  " + year + " semanas " + week + " dias " + dias );








