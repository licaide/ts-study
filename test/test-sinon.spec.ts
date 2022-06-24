import { Person } from "../src/test_sinon";
import { expect } from "chai";

import sinon from "sinon";
describe('#sinon test', () => {
    it('sinon.pay test', async () => {
        const spy = sinon.spy();
        spy("a", "b");
        expect(spy.callCount).equal(1);
        expect(spy.calledOnce).equal(true);

        sinon.assert.calledWith(spy, "a");
        console.log(JSON.stringify(spy.args));


        const person = new Person("hello", 18);
        person.setName("hello0")
        const setNameSpy = sinon.spy(person, "setName");
        person.setName("hello1")
        expect(setNameSpy.callCount).equal(1);
        person.setName("hello2")
        expect(setNameSpy.callCount).equal(2);
        console.log("setNameSpy.callArg=>" + JSON.stringify(setNameSpy.callArg));
        console.log("setNameSpy.args=>" + JSON.stringify(setNameSpy.args));
        console.log("setNameSpy.returnValues=>" + JSON.stringify(setNameSpy.returnValues));

        const infoSpy = sinon.spy(person, "info");
        console.log(JSON.stringify(infoSpy.callArg));
        // 非常重要的步骤--拆除spy
        setNameSpy.restore();


    });
    it('sinon.stub test', async () => {
        const person = new Person("hello", 18);
        console.log(person.info());
        expect(person.info()).equal("hello18");


        const infoStub = sinon.stub(person, "info");
        console.log(person.info());
        expect(person.info()).undefined;

        sinon.assert.callCount(infoStub, 2);
        infoStub.restore();

        const setNameStub = sinon.stub(person, "setName");
        setNameStub.returns(false);

        person.setName("hello1")
        expect(setNameStub.callCount).equal(1);
        person.setName("hello2")
        expect(setNameStub.callCount).equal(2);
        console.log("setNameStub.args=>" + JSON.stringify(setNameStub.args));
        console.log("setNameStub.returnValues=>" + JSON.stringify(setNameStub.returnValues));
        setNameStub.resolves();

    });
    it('sinon.replace test', async () => {
        const person = new Person("hello", 18);
        const getAgeReplace = sinon.replace(person, "getAge", () => 666);
        console.log("person.getAge=>" + person.getAge())

    });


    it('sinon.stub mock', async () => {
        const person = new Person("hello", 18);
        const personMock = sinon.mock(person);

        personMock.expects('setName').withArgs('helloMock').returns(true);
        person.setName("helloMock");
        // personMock.expects('setName').once();
        // person.setName("helloMock3");
        personMock.restore();
        personMock.verify();
    });
});