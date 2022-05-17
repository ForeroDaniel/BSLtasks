//EJERCICIO 1

export function quarterOf(month: number): number {
  let result:number;
  if (month > 0 && month < 4){
    result = 1;
  }else if (month > 3 && month < 7){
    result = 2;
  }else if (month > 6 && month < 10){
    result = 3;
  }else { result = 4; }
  
  return result
}
                                     
                                     
                                     
//EJERCICIO 2

export const boolToWord = (bool: boolean): string => {
  return bool === true ? 'Yes' : 'No';
};



//EJERCICIO 3
  
export function abbrevName(name: string): string {
    const splitName = name.toUpperCase().split(' ');
    return `${splitName[0][0]}.${splitName[1][0]}`;
}



//EJERCICIO 4
  
export function updateLight(current: string): string {
  return (current == "green") ? "yellow" 
       : (current == "yellow") ? "red"
       : (current == "red") ? "green"
       : "error";
}



//EJERCICIO 5
                                     




