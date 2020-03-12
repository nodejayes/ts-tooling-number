import 'mocha';
import {assert} from 'chai';
import '../src'

describe('Number Extension Tests', () => {
    describe('[Method]: Ceil', () => {
        it('ceil to a Integer when no precision is pass', () => {
            assert!.equal(4.006.Ceil!(), 5);
        });
        it('ceil to exact precision when the precision is pass', () => {
            assert.equal(6.004.Ceil!(2), 6.01);
        });
        it('ceil negative precision', () => {
            assert.equal((6040).Ceil!(-2), 6100);
        });
    });
    describe('[Method]: Clamp', () => {
        it('clamp to upper Limit when bigger than upper Limit', () => {
            assert.equal(5.1.Clamp!(1.0, 2.0), 2.0);
        });
        it('clamp to lower Limit when lower than lower Limit', () => {
            assert.equal(0.5.Clamp!(1.0, 2.0), 1.0);
        });
        it('returns the same value when between the upper and lower limit', () => {
            assert.equal(1.5.Clamp!(1.0, 2.0), 1.5);
        });
        it('if value is a lower or upper border the value was returned', () => {
            assert.equal(1.0.Clamp!(1.0, 2.0), 1.0);
            assert.equal(2.0.Clamp!(1.0, 2.0), 2.0);
        });
    });
    describe('[Method]: Floor', () => {
        it('floor to a Integer when no precision is pass', () => {
            assert.equal(4.006.Floor!(), 4);
        });
        it('floor to exact precision when the precision is pass', () => {
            assert.equal(0.046.Floor!(2), 0.04);
        });
        it('floor negative precision', () => {
            assert.equal((4060).Floor!(-2), 4000);
        });
    });
    describe('[Method]: IsInRange', () => {
        it('value between returns true', () => {
            assert.isTrue(1.2.IsInRange!(1.0, 2.0));
        });
        it('border values returns true', () => {
            assert.isTrue(1.0.IsInRange!(1.0, 2.0));
            assert.isTrue(2.0.IsInRange!(1.0, 2.0));
        });
        it('value outside returns false', () => {
            assert.isFalse(5.2.IsInRange!(1.0, 2.0));
        });
    });
    describe('[Method]: Round', () => {
        it('round to a Integer when no precision is pass', () => {
            assert.equal(4.006.Round!(), 4);
        });
        it('round to exact precision when the precision is pass', () => {
            assert.equal(4.006.Round!(2), 4.01);
        });
        it('round negative precision', () => {
            assert.equal((4060).Round!(-2), 4100);
        });
    });
    describe('[Method]: Numerals', () => {
        it('Integer 1000 has 4', () => {
            assert.equal((1000).Numerals!(), 4);
        });
        it('Float 10.456789 has 2', () => {
            assert.equal(10.456789.Numerals!(), 2);
        });
    });
    describe('[Method]: DecimalPlaces', () => {
        it('Integer 1000 has 0', () => {
            assert.equal((1000).DecimalPlaces!(), 0);
        });
        it('Float 10.456789 has 6', () => {
            assert.equal(10.456789.DecimalPlaces!(), 6);
        });
    });
});
