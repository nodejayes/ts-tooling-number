/**
 * @ignore
 */
const enum RoundMethod {
    ROUND,
    CEIL,
    FLOOR
}

/**
 * @ignore
 * @param value
 * @param precision
 * @param method
 */
function round(value: number, precision = 0, method = RoundMethod.ROUND): number {
    let offset = '1';
    for (let i = 0; i < Math.abs(precision); i++) {
        offset += '0';
    }
    const tmp = parseInt(offset, 10);
    switch (method) {
        case RoundMethod.FLOOR:
            return precision < 0 ?
                Math.floor(value / tmp) * tmp :
                Math.floor(value * tmp) / tmp;
        case RoundMethod.CEIL:
            return precision < 0 ?
                Math.ceil(value / tmp) * tmp :
                Math.ceil(value * tmp) / tmp;
        default:
            return precision < 0 ?
                Math.round(value / tmp) * tmp :
                Math.round(value * tmp) / tmp;
    }

}

Number.prototype.IsInRange = function (lower, upper) {
    return this <= upper && this >= lower;
};

Number.prototype.Clamp = function (lower, upper) {
    if (this < lower) {
        return lower;
    }
    if (this > upper) {
        return upper;
    }
    return this.valueOf();
};

Number.prototype.Ceil = function (precision) {
    return round(this.valueOf(), precision, RoundMethod.CEIL);
};

Number.prototype.Floor = function (precision) {
    return round(this.valueOf(), precision, RoundMethod.FLOOR);
};

Number.prototype.Round = function (precision) {
    return round(this.valueOf(), precision);
};

Number.prototype.Numerals = function () {
    return this.toFixed(0).length;
};

Number.prototype.DecimalPlaces = function () {
    const tmp = this.toString().split('.');
    return tmp[1] ? tmp[1].length : 0;
};
