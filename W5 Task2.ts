EJERCICIO 1

export function gooseFilter (birds: string[]): string[] {
  const geese: [string] = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(function (item) {return geese.indexOf(item) === -1;});
}



EJERCICIO 2

