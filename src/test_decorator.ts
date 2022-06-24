// tsconfig.json 需要配下列属性
// "compilerOptions": {
//     "target": "es6",
//     "experimentalDecorators": true
// }


type strOrNum=string|number;

function logClz(params:strOrNum) {
    return function(target:any) {
        console.log(`logClz(${params})`);
    }
}
function logAttr(params?:strOrNum) {
    return function(target:any, attrName:any) {
      //let aa=  Reflect.getMetadata(`design:type`, target, attrName)
        console.log(`logAttr(${params})  ${attrName}`)
    }
}
function logMethod(params?:strOrNum) {
    return function(target:any, methodName:any, desc:any) {
        console.log(`logMethod(${params}) methodName ${methodName}`)
    }
}
function logParam(params?:strOrNum) {
    return function(target:any, paramName:any, paramIndex:any) {
        console.log(`logParam(${params}) paramName ${paramName} paramIndex ${paramIndex}`);
    }
}
@logClz('1')
@logClz('2')
class TestDecorator {
    constructor() { }
    @logMethod("1")
    @logMethod("2")
    testMethodDecMore() {
        console.log('get data');
    }

    @logMethod()
    testMethodDec1() {
        console.log('get data');
    }
    @logMethod()
    testMethodDec2() {
        console.log('get data');
    }
   
    @logMethod()
    testMethodParamDec(@logParam(1) param1:any, @logParam(2) param2:any) {
        console.log(`data=>${ param1} ${param1}`);
    }
    @logAttr(1)
    @logAttr(2)
    public attr:string|undefined;

    @logAttr()
    public attr1:string|undefined;
    @logAttr()
    public attr2:string|undefined;
}

const decorator=new TestDecorator();
decorator.testMethodParamDec("123","456")
// logAttr --> logMethod --> logParam22 --> logParam11 --> logClz22 --> logClz11
