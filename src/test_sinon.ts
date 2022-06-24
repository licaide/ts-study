export class Person {
    private name: string;
    private age: number;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    setName(name) {
        this.name = name;
        return true;
    }
    getAge(){
        return this.age;
    }
    info() {
        return this.name + this.age;
    }
}