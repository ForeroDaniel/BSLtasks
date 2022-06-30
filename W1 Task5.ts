// Task 5: Ejercicio modelado de datos

// Ahora que conocemos los tipos de datos con los que cuenta TypeScript, 
// vamos a practicar como modelar problemas prácticos con los tipos de datos conocidos.


// Reto 1  
// Para un sistema de gestión de tareas, deseamos registrar todas las tareas, 
// cada tarea tiene asociada la siguiente información: nombre, fecha de inicio, 
// descripción y estatus, el estatus debe ser uno de los siguientes: 
// pendiente, en proceso, terminada, cancelada. 
// Además, se requiere una lista con todas las tareas pendientes, las tareas terminadas y las canceladas.  
// Respuesta:  
  
	
class Tarea {
    nombre: string;
    descripción: string;
    fechaDeInicio: string;
    status: 'pendiente' | 'enProceso' | 'terminada';
  }

let tareasPendientes: Tarea[] = [];

let tareasEnProceso: Tarea[] = [];

let tareasTerminadas: Tarea[] = [];
	  	  
	  
// Reto 2:
// Queremos implementar un sistema de registro de eventos, para esto, 
// necesitamos guardar una lista con  la información de las personas participantes del evento,  
// los datos mínimos por participante son: nombre completo, teléfono, correo. 
// Cada evento cuenta con un nombre, precio, fecha y aforo máximo. 
// Se desea guardar una lista con el historial de los eventos y 
// que cada persona pueda ver los datos de los eventos a los que asistió y a los que piensa asistir en un futuro.  
// Respuesta:  


class Participante {
  nombreCompleto: string;
  teléfono: string;
  correo: string;
  }

class Evento = {
  nombre: string;
  precio: number;
  fecha: Date;
  aforoMáximo: number;
  };

let historialDeEventos: Evento[] = [];
  

// Reto 3:  
// D2 requiere un registro de inventario básico, para ello necesita saber la lista de 
// productos existentes en su  almacén principal, cada producto debe tener asignados los siguientes atributos: 
// Nombre, fecha de vencimiento, precio, peso, uuid, distribuidor, cantidad.  
// Se cuenta también con los datos de los distribuidores, entre ellos: nombre, teléfono, productos que ofrece. 
// Además, D2 requiere las siguientes listas: productos en almacén, 
// productos por solicitar a distribuidor y lista de distribuidores  
// Respuesta:  
	
  
class Producto {
  public nombre: string;
  public fechaDeVencimiento: string;
  public precio: number;
  public peso: number;
  public uuid: string;
  public distribuidor: string;
  public cantidad: number;
  }

class Distribuidor = {
  nombre: string;
  teléfono: string;
  productos_que_ofrece: string[];
  };

let productosEnAlmacen: Producto[] = [];

let productosPorSolicitar: Producto[] = [];

let ListaDeDistribuidores: Distribuidor[] = [];
	  	  
	  
