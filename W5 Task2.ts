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

