import '../src';
import {Benchmark} from 'collatio';
import {assert} from 'chai';

const b = new Benchmark('Numerals');
b.setup(() => {}, 1000);

function native(value: number): number {
    return value.toFixed(0).length;
}

export function run() {
    b.run('ts-tooling', () => {
        assert.equal((2.4777).Numerals!(), 1);
    });

    b.run('Javascript', () => {
        assert.equal(native(2.4777), 1);
    });
    return b;
}
