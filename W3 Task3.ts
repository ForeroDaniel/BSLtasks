
// Agrega las porciones de código faltantes para que el código se ejecute sin errores. El código faltante esta indicado por `???`

//EJERCICIO 1
const myPromise = Promise.???(1)
myPromise.then((value) => {
  console.log(value) // log: 1
}) 
//RESOLVED
const myPromise = Promise.resolve(1)
myPromise.then((value) => {
  console.log(value) // log: 1
}) 



//EJERCICIO 2
const myPromise = new Promise((resolve) => {
  resolve(???)  
})

myPromise.???((value) => {
 console.log(value + 1)  // log: 2
})
//RESOLVED
const myPromise = new Promise((resolve) => {
  resolve(1)  
})

myPromise.then((value) => {
 console.log(value + 1)  // log: 2
})
  
  
  
//EJERCICIO 3
const myPromise = new Promise((???) => {
  resolve(1)  
})

myPromise
  .???((value) => {
    return value + 2
  })
  .???((value) => {
   console.log(value + ???) // log: 4
  })
//RESOLVED
const myPromise = new Promise((resolve) => {
  resolve(1)  
})

myPromise
  .then((value) => {
    return value + 2
  })
  .then((value) => {
   console.log(value + 1) // log: 4
  })
  
  
  
//EJERCICIO 4
const myPromise = new Promise((???, ???) => {
  ???('Error: Operation Failed')  
})

myPromise
  .catch((err) => {
   console.log(err) // log: 'Error: Operation Failed'
  })
//RESOLVED
const myPromise = new Promise((resolve, reject) => {
  console.error('Error: Operation Failed')  
})

myPromise
  .catch((err) => {
   console.log(err) // log: 'Error: Operation Failed'
  })

  
  
  
//EJERCICIO 5
const callback1 = (value) => console.log('Esto es un texto:', value)
const callback2 = (value) => console.log('Esto es un numero:', value)

const myPromise = new Promise((resolve) => {
  setTimeout(() => 
    resolve(2)
  }, 1000) 
})

myPromise.then(???) // log: Esto es un numero: 2
//RESOLVED 
const callback1 = (value) => console.log('Esto es un texto:', value)
const callback2 = (value) => console.log('Esto es un numero:', value)

const myPromise = new Promise((resolve) => {
  setTimeout(() => 
    resolve(2)
  , 1000) 
})

myPromise.then(callback2)
  
  
  
  
  
  
               
