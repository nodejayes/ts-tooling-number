import {NumberFactory} from '../src';
import {Benchmark} from 'collatio';

const b = new Benchmark('NumberFactory');
b.setup(() => {}, 1000);

b.run('ts-tooling IsInRange', () => {
    if ((2).IsInRange!(0, 10)) {
        return true;
    }
});

b.run('native IsInRange', () => {
    if (2 <= 10 && 2 >= 0) {
        return true;
    }
});
b.print(3);
