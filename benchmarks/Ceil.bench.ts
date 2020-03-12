import '../src';
import {Benchmark} from 'collatio';
import {assert} from 'chai';

const b = new Benchmark('Ceil');
b.setup(() => {}, 1000);

export function run() {
    b.run('ts-tooling', () => {
        assert.equal((2.4777).Ceil!(1), 2.5);
    });

    b.run('Javascript', () => {
        const precision = 1;
        let offset = '1';
        for (let i = 0; i < Math.abs(precision); i++) {
            offset += '0';
        }
        const tmp = parseInt(offset, 10);
        const result = precision < 0 ?
            Math.ceil(2.4777 / tmp) * tmp :
            Math.ceil(2.4777 * tmp) / tmp;
        assert.equal(result, 2.5);
    });
    return b;
}
