// 1_ Dada una lista de estudiantes donde cada estudiante tiene un nombre, edad, y una lista de notas, 
//   muestra los nombres de los estudiantes en consola que en su promedio hayan sacado 3.0 o más.


let listaDeEstudiantes = {
  {nombre: 'juan', edad: '20', notas: '4'}
  {nombre: 'misaki', edad: '25', notas: '3'}
  {nombre: 'okita', edad: '21', notas: '2.8'}
  {nombre: 'alexandr', edad: '22', notas: '5'}
  {nombre: 'paz', edad: '20', notas: '2'}
}

listaDeEstudiantes.forEach((element) => {
  if (element.notas >= 3.0){
    console.log(element.nombre);
  }
});


// 2_ Dada una lista de números mostrar en consola solo los números impares, 
//   pero si se encuentra un número múltiplo de 5 terminar el ciclo.


let listaDeNumeros = [17, 26, 37, 42, 50, 61, 78, 89, 93]

for (i = 0; i < listaDeNumeros.length; i++){
  if (listaDeNumeros[i] % 2 === 0) {
    console.log(`${listaDeNumeros[i]} es par`);
  }
  if (listaDeNumeros[i] % 5 === 0) {
    console.log(`${listaDeNumeros[i]} es múltiplo de 5`);
  break;
  }
}


// 3_ Genera un número aleatorio entre 1 y 10 y muéstralos en consola hasta que encuentres el número 6.


let random: number;
do {
  random = Math.floor(Math.random() * 10 + 1);
  console.log(random);
} while (random !== 6);


