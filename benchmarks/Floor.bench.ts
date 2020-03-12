import '../src';
import {Benchmark} from 'collatio';
import {assert} from 'chai';

const b = new Benchmark('Floor');
b.setup(() => {}, 1000);

function native(value: number, precision: number): number {
    let offset = '1';
    for (let i = 0; i < Math.abs(precision); i++) {
        offset += '0';
    }
    const tmp = parseInt(offset, 10);
    return precision < 0 ?
        Math.floor(value / tmp) * tmp :
        Math.floor(value * tmp) / tmp;
}

export function run() {
    b.run('ts-tooling', () => {
        assert.equal((2.4777).Floor!(1), 2.4);
    });

    b.run('Javascript', () => {
        assert.equal(native(2.4777, 1), 2.4);
    });
    return b;
}
