
function calcularSueldo(horas, horasExtra, faltas) {
    const pagoHora = 30;
    const pagoHoraExtra = 31;
    const descuentoFalta = 30;
  
    const totalPago = (horas * pagoHora) + (horasExtra * pagoHoraExtra) - (faltas * descuentoFalta);
    return totalPago;
  }
  
  const horas = parseInt(prompt("Ingrese la cantidad de horas trabajadas:"));
  const horasExtra = parseInt(prompt("Ingrese la cantidad de horas extra:"));
  const faltas = parseInt(prompt("Ingrese la cantidad de faltas:"));
  
  const sueldo = calcularSueldo(horas, horasExtra, faltas);
  alert("El sueldo del empleado es: " + sueldo + " soles");
  
