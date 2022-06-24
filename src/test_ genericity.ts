
class BaseDog<T>{

    public _oatColor: { new(): T }
    constructor(st: { new(): T }) {
        this._oatColor = st;
    }
    private _color: T;
    getCoatColor(): T {
        if (!this._color) {
            this._color = new this._oatColor();
        }
        return this._color;
    }
    setCoatColor(color: T) {
        this._color = color;
    }
}

class Color {
    constructor() {
        this.r = 1;
        this.g = 2;
        this.b = 3;
    }

    // constructor(r?:Number,g?:Number,b?:Number){
    //     this.r=r;
    //     this.g=g;
    //     this.b=b;
    // }

    r: Number;
    g: Number;
    b: Number;
}
class maxDog extends BaseDog<Color>{
    constructor() {
        super(Color);
    }
}

let dog = new maxDog();
let c = new Color();
c.r = 5;
c.b = 6;
c.g = 7;
dog.setCoatColor(c);
let color = dog.getCoatColor();
console.log(color);

class Student {
    name: string;
    age: number;
    constructor(name: string, age?: number){
        this.name = name;
        this.age = age;
    }
   
}
type studentType={new(name: string, age?: number):Student};

class StuClass{
    private _Student:studentType;
    constructor(student:studentType){
      this._Student=student;
    }
    getStudents():Student[]{
        return[new this._Student("xm",18)] 
    }
}
let stuClass= new StuClass(Student);
let stu=stuClass.getStudents();
console.log(stu);

