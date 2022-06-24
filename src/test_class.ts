import {Birds} from "./test_interface";

class Chicken implements Birds  {
    static age:number=18;
    area: string;// 默认 public
    constructor(public color:string, area:string) {
        // public color: string 是 this.area=area 的简化形式
        this.area =area;
    }
     
    async outInfo() {
        await  console.log(`info=>${this.area} ${this.color}`)
    }
}
export const chicken=new Chicken("red","地面");
console.log(chicken);