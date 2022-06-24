import { sum, pass, max } from "../src/count";
import { expect } from "chai";

describe('#count.ts', () => {

    describe('#sum()', () => {
        it('sum() should return 0', () => {
            expect(sum()).eql(0);
        });

        it('sum(1) should return 1', () => {
            expect(sum(1)).eql(1);
        });

        it('sum(1, 2) should return 3', () => {
            expect(sum(1, 2)).eql(3);
        });

        it('sum(1, 2, 3) should return 6', () => {
            expect(sum(1, 2, 3)).eql(6);
        });
    });
    describe('#pass()', () => {
        it('pass() should return false', () => {
            expect(pass(10)).eql(false);
        });
        // it('pass() should return true', () => {
        //     expect(pass(70)).eql(true);
        // });
    });
    describe('#max()', () => {
        it('max() should return 2', () => {
            expect(max(1, 2)).eql(2);
        });

    });
});