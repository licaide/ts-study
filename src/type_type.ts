type Alias = { num: number }
interface Interface {
    num: Alias;
    age:"23";
}
interface Interface {
    name: string;
     
}
type AA=Interface;
type B={name:123};
var aa:AA={num:{num:2},age:"23",name:"hello"};
var obj={0:"a",2:"b"};

interface Name {
    name: string;
}

interface User extends Name {
    age: number;
}

// type Name = {
//     name: string;
// }

// type User = Name & { age: number }

interface test{
    name:string|number;
}
type test1=string|number;

type Diff<T, U> = T extends U ? never : T;
 
 
type R = Diff<"a" | "b" | "c" | "d", "a" | "e" | "f">;  // "b" | "d"

type Filter<T, U> = T extends U ? T : never;
type R1 = Filter<string | number | boolean, number>;

 type T0 = Parameters<(a:string[]) => string>;  // []
// type T1 = Parameters<(s: string) => void>;  // [string]
// type T2 = Parameters<(<T>(arg: T) => T)>;  // [unknown]
// type Parameters2<T,R extends Array<any>> = T extends (...args:R) => any ? R : any;
// type T02 = Parameters2<() => string,string[]>; 

type T1 = { name: string };
  type T2 = { age: number };
  
  type UnionToInterp<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void } ? U : never;
  type T3 = UnionToInterp<{ a: (x: T1) => void; b: (x: T2) => void }>; // T1 & T2
 
  type aa=ReturnType<()=>string>;

  type Test1<T>=T extends {a:string}?string:never;
  type Tt1=Test1<{a:string,b:number}> //type Tt1 = string
  type Test2<T>=T extends {a:infer R}?R:never;
  type Tt2=Test2<{a:string,b:number}>  //type Tt2 = string
  type Tt3=Test2<{a:boolean,b:number}> //type Tt2 = boolean
  //infer R 像声明一个占位符，推导入参的某个属性字段或返回值的类型并返回