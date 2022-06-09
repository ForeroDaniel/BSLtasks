//        Define una función que reciba como parámetro cualquiera de las siguientes clases de eventos
//        ("concierto", "obra de teatro", "Evento deportivo") y devuelva la locación para este evento  
// 	- concierto → teatro  
// 	- obra de teatro → Foro  
// 	- Evento deportivo → Coliseo   

interface Iconcierto {
  location: 'teatro';
} 

interface IobraDeTeatro {
  location: 'foro';
}

interface IeventoDeportivo {
  location: 'coliseo';
}

function eventLocation(e: Iconcierto|IobraDeTeatro|IeventoDeportivo) {
  switch (e.location) {
    case 'teatro': return e.location;
    case 'foro': return e.location;
    case 'coliseo': return e.location;
  }
}

let miConcierto: Iconcierto = {location: 'teatro'}
eventLocation(miConcierto)
let miObraDeTeatro: IobraDeTeatro = {location: 'foro'}
eventLocation(miObraDeTeatro)
let miEventoDeportivo: IeventoDeportivo = {location: 'coliseo'}
eventLocation(miEventoDeportivo)

// - Hay tres clases de boletos de avión. Escribe una función que reciba un boleto e imprima de que tipo es el boleto y sus características:  
// 	- Boletos de primera clase  
// 	- Boletos clase económica  
// 	- Boletos a base de puntos  
// 	- Todos los boletos tienen origen, destino, precio y asientos  
// 	- Los de clase económica y de primera clase tienen la cantidad de equipaje que pueden llevar  
// 	- Los de primera clase tienen una lista de alimentos que se les va a dar durante el vuelo

interface IprimeraClase {
  tipoDeBoleto:'primera clase';
  id: number;
  origen: string;
  destino: string;
  precio: string;
  asientos: string;
  equipajePermitido: string;
  listaDeAlimentosEnVuelo: string[];
} 

interface IclaseEconomica {
  tipoDeBoleto:'clase economica';
  id: number;
  origen: string;
  destino: string;
  precio: string;
  asientos: string;
  equipajePermitido: string;
}

interface IaBaseDePuntos {
  tipoDeBoleto:'a base de puntos';
  id: number;
  origen: string;
  destino: string;
  precio: string;
  asientos: string;
}

function tipoDeBoleto(boleto: IprimeraClase|IclaseEconomica|IaBaseDePuntos) {
  switch (boleto.tipoDeBoleto) {
    case 'primera clase': return boleto ;
    case 'clase economica': return boleto;
    case 'a base de puntos': return boleto;
  }
}

let miBoletoPrimeraClase: IprimeraClase = {
  tipoDeBoleto:'primera clase', 
  id: 5632,
  origen: 'string',
  destino: 'string',
  precio: 'string',
  asientos: 'string',
  equipajePermitido: 'string',
  listaDeAlimentosEnVuelo: ['string'],}
tipoDeBoleto(miBoletoPrimeraClase)
let miBoletoClaseEconomica: IclaseEconomica = {
  tipoDeBoleto:'clase economica', 
  id: 5633,
  origen: 'string',
  destino: 'string',
  precio: 'string',
  asientos: 'string',
  equipajePermitido: 'string',
}
tipoDeBoleto(miBoletoClaseEconomica)
let miBoletoABaseDePuntos: IaBaseDePuntos = {
  tipoDeBoleto:'a base de puntos', 
  id: 5634,
  origen: 'string',
  destino: 'string',
  precio: 'string',
  asientos: 'string',
}
tipoDeBoleto(miBoletoABaseDePuntos)
