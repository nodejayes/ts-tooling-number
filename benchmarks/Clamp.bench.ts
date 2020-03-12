import '../src';
import {Benchmark} from 'collatio';
import {assert} from 'chai';

const b = new Benchmark('Clamp');
b.setup(() => {}, 1000);

function native(value: number, lower: number, upper: number): number {
    if (value < lower) {
        return lower;
    }
    if (value > upper) {
        return upper;
    }
    return value.valueOf();
}

export function run() {
    b.run('ts-tooling', () => {
        assert.equal((100).Clamp!(0, 10), 10);
    });

    b.run('Javascript', () => {
        assert.equal(native(100, 0, 10), 10);
    });
    return b;
}
