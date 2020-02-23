export { }

var message = "Hello World!";
let username = "Ronny"

console.log(username, ":", message);

// test
let check: boolean = true;
let num: number = 3;
let name: string = "Tom";
let sentence: string = `My name is ${name},
testing typescript.`



console.log(sentence);



let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
let list3: [string, number, boolean] = ["1", 2, false];


enum color { red = 5, green, blue };
let g: color = color.green;
console.log(g)

let any_test: any = 10;
any_test = true;
any_test = "test";



let check1: unknown = true;

let multiType: number | string;
multiType = 3;
multiType = "hi";



function add(num1: number, num2?: number): number {
    if (num2) {
        return num1 + num2;
    } else {
        return num1;
    }
}
console.log(add(3, 5));
console.log(add(3));


interface Person {
    firstName: string,
    lastName: string
}


function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let batman = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}

fullName(batman);


class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Hello ${this.employeeName}`)
    }
}

let emp1 = new Employee('Peter');
console.log(emp1.employeeName);
emp1.greet();


class manager extends Employee {
    constructor(mangerName) {
        super(mangerName);
    }
}
