//EJERCICIO 1

export function gooseFilter (birds: string[]): string[] {
  const geese: [string] = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(function (item) {return geese.indexOf(item) === -1;});
}



//EJERCICIO 2

export class Kata {
  static highAndLow(numbers: string): string {
    const stringArray = numbers.split(' ');
    const numberArray = stringArray.map((item) => parseInt(item));
    return `${Math.max.apply(null, numberArray)} ${Math.min.apply(null, numberArray)}`; 
  }
}



//EJERCICIO 3

export class Kata {
  static getCount(str: string): number {
    let vowelCounter = 0;
    for (let i = 0; i < str.length; i++) {
      let vowels = ['a', 'e', 'i', 'o', 'u']
      str[i] === vowels[0] || str[i] === vowels[1] || str[i] === vowels[2] || str[i] === vowels[3] || str[i] === vowels[4] ? vowelCounter++ : vowelCounter  
    }
    return vowelCounter
  }
}



//EJERCICIO 4

export class Kata {
  static disemvowel(str: string): string {
    return str.replace(/[aeiou]/gi, '');
  }
}



//EJERCICIO 5

//EJERCICIO 6

function solution(value){
  let fiveDigitsNumber = value.toString().length === 1 ?  `0000${value}` : 
                         value.toString().length === 2 ?  `000${value}` :
                         value.toString().length === 3 ?  `00${value}` :
                         value.toString().length === 4 ?  `0${value}` :
                         value.toString().length === 5 ?  `${value}` : 0
  return `Value is ${fiveDigitsNumber}`                                          
}



//EJERCICIO 7

function plant(seed, water, fert, temp){
   return temp >= 20 && temp <= 30 ? `${'-'.repeat(water)}${seed.repeat(fert)}`.repeat(water) : `${'-'.repeat(water)}`.repeat(water) + seed
}



