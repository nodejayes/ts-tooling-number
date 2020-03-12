import 'mocha';
import {assert} from 'chai';
import {NumberFactory} from '../src';

describe('Number Generator Tests', () => {
    describe('[Method]: RandomInteger', () => {
        it('generates Integer Numbers', () => {
            let counter = 0;
            while (counter < 10000) {
                const n = NumberFactory.RandomInteger(0, 10);
                assert.isTrue(n >= 0 && n <= 10);
                assert.equal(n%1, 0);
                counter++;
            }
        });
    });
    describe('[Method]: RandomDouble', () => {
        it('generates Double Numbers', () => {
            let counter = 0;
            while (counter < 10000) {
                const n = NumberFactory.RandomDouble(0, 10);
                assert.isTrue(n >= 0 && n <= 10);
                assert.isAbove(n%1, 0);
                counter++;
            }
        });
    });
    describe('[Method]: NewInteger', () => {
        it('default is zero', () => {
            assert.equal(NumberFactory.NewInteger('dsjdjhdh'), 0);
        });
        it('create from number', () => {
            assert.equal(NumberFactory.NewInteger(1), 1);
            assert.equal(NumberFactory.NewInteger(1.5), 1);
            assert.equal(NumberFactory.NewInteger(1.4), 1);
            assert.equal(NumberFactory.NewInteger(1.6), 1);
        });
        it('create from string', () => {
            assert.equal(NumberFactory.NewInteger('1'), 1);
            assert.equal(NumberFactory.NewInteger('1.5'), 1);
        });
    });
    describe('[Method]: NewDouble', () => {
        it('default is zero', () => {
            assert.equal(NumberFactory.NewDouble('dsjdjhdh'), 0);
        });
        it('create from number', () => {
            assert.equal(NumberFactory.NewDouble(1), 1);
            assert.equal(NumberFactory.NewDouble(1.5), 1.5);
        });
        it('create from string', () => {
            assert.equal(NumberFactory.NewDouble('1'), 1);
            assert.equal(NumberFactory.NewDouble('1.5'), 1.5);
        });
    });
});
