<!-- - Define una función que reciba como parámetro cualquiera de las siguientes clases de eventos
       ("concierto", "obra de teatro", "Evento deportivo") y devuelva la locación para este evento  
	- concierto → teatro  
	- obra de teatro → Foro  
	- Evento deportivo → Coliseo   -->

interface concierto {
  location: 'teatro';
} 

interface obraDeTeatro {
  location: 'foro';
}

interface eventoDeportivo {
  location: 'coliseo';
}

function eventLocation(e: concierto|obraDeTeatro|eventoDeportivo) {
  switch (e.location) {
    case 'teatro': return e.location;
    case 'foro': return e.location;
    case 'coliseo': return e.location;
  }
}

<!-- - Hay tres clases de boletos de avión. Escribe una función que reciba un boleto e imprima de que tipo es el boleto y sus características:  
	- Boletos de primera clase  
	- Boletos clase económica  
	- Boletos a base de puntos  
	- Todos los boletos tienen origen, destino, precio y asientos  
	- Los de clase económica y de primera clase tienen la cantidad de equipaje que pueden llevar  
	- Los de primera clase tienen una lista de alimentos que se les va a dar durante el vuelo   -->
