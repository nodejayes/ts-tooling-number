import '../src';
import {Benchmark} from 'collatio';
import {assert} from 'chai';

const b = new Benchmark('IsInRange');
b.setup(() => {}, 1000);

export function run() {
    b.run('ts-tooling', () => {
        assert.isTrue((2).IsInRange!(0, 10));
    });

    b.run('Javascript', () => {
        assert.isTrue(2 <= 10 && 2 >= 0);
    });
    return b;
}
