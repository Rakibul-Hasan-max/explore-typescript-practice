const myNum = 25;
const myName = 'Hasan';
console.log('first TS code', myNum, myName);


let money: number = 88;
let honey: string = 'O my sweet Heart honey dew dew peu peu';
let funny: boolean = true;

const age: number = 21;




function add(first: number, second: number): number {
    const result = first + second;
    return result;
}

const output: number = add(45, 87);

function doubleConsole(number: number): void {
    console.log(2 * number);

}

// multi purpose
/* function add(first: number | string, second: number | string): number | string {
    const result: string | number = first + second;
    return result;
}

const output: number = add(45, 87);
const fullName = add('Adam', 'Sand');
 */