import '../src';
import {Benchmark} from 'collatio';
import {assert} from 'chai';

const b = new Benchmark('DecimalPlaces');
b.setup(() => {}, 1000);

function native(value: number): number {
    const tmp = value.toString().split('.');
    return tmp[1] ? tmp[1].length : 0;
}

export function run() {
    b.run('ts-tooling', () => {
        assert.equal((2.4777).DecimalPlaces!(), 4);
    });

    b.run('Javascript', () => {
        assert.equal(native(2.4777), 4);
    });
    return b;
}
