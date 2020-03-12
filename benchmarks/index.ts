import {run as CeilBenchmark} from './Ceil.bench';
import {run as ClampBenchmark} from './Clamp.bench';
import {run as DecimalPlacesBenchmark} from './DecimalPlaces.bench';
import {run as FloorBenchmark} from './Floor.bench';
import {run as IsInRangeBenchmark} from './IsInRange.bench';
import {run as NumeralsBenchmark} from './Numerals.bench';
import {run as RoundBenchmark} from './Round.bench';
import {join} from 'path';
import {writeFileSync} from 'fs';
import {Benchmark} from 'collatio';

let tmp = '';

function createDataLines(stats: {name: string, duration: number, runtime: number, ops: number}[]) {
    for (const d of stats.sort((a, b) => {
        if (a.ops > b.ops) {
            return -1;
        } else if (a.ops < b.ops) {
            return 1;
        }
        return 0;
    })) {
        tmp += `| ${d.name} | ${d.ops} | ${d.duration} |\n`;
    }
}

function createStatsTable(stats: {name: string, duration: number, runtime: number, ops: number}[], method: string) {
    tmp += `### ${method} \n`;
    tmp += '\n';
    tmp += '| Benchmark | ops/sek | duration |\n';
    tmp += '|-----------|---------|----------|\n';
    createDataLines(stats);
}

function processBenchmark(bench: () => Benchmark<any>, method: string) {
    const b = bench();
    createStatsTable(b.stats, method);
    b.print(3);
}

function writeProtocol() {
    tmp += '# Number Benchmarks\n';
    tmp += '\n';
    processBenchmark(CeilBenchmark, 'Ceil');
    processBenchmark(ClampBenchmark, 'Clamp');
    processBenchmark(DecimalPlacesBenchmark, 'DecimalPlaces');
    processBenchmark(FloorBenchmark, 'Floor');
    processBenchmark(IsInRangeBenchmark, 'IsInRange');
    processBenchmark(NumeralsBenchmark, 'Numerals');
    processBenchmark(RoundBenchmark, 'Round');
    tmp += '\n';
    const protocolPath = join(__dirname, '..', 'BENCHMARKS.md');
    writeFileSync(protocolPath, tmp, {encoding: 'utf-8'});
}
writeProtocol();
