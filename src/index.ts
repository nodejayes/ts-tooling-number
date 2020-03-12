export {NumberFactory} from './number-factory';
import './extensions';

declare global {
    /**
     * extends the basic Javascript Number
     */
    interface Number {
        /**
         * Checks if a number is within 2 limits.
         *
         * The limit values are included!
         *
         * @param lower the lower limit
         * @param upper the upper limit
         *
         * @example
         * // returns true
         * 1.2.IsInRange(1.0, 2.0);
         * 1.0.IsInRange(1.0, 2.0);
         * 2.0.IsInRange(1.0, 2.0);
         * // returns false
         * 5.2.IsInRange(1.0, 2.0)
         */
        IsInRange?(lower: number, upper: number): boolean;

        /**
         * Sets the value of the number to the lower or upper limit if the number is greater or smaller than the opere or lower limit.
         *
         * @param lower the lower limit
         * @param upper the upper limit
         *
         * @example
         * // returns 10
         * (20).Clamp(1, 10);
         * (10).Clamp(1, 10);
         * // returns 9
         * (9).Clamp(1, 10);
         * // returns 1
         * (1).Clamp(1, 10);
         * (0.5).Clamp(1, 10);
         */
        Clamp?(lower: number, upper: number): number;

        /**
         * Rounds a number up or down if the next digit is greater than or equal to 5.
         *
         * @param precision Number of digits used for rounding
         *
         * @example
         * // returns 4
         * 4.006.Round();
         * // returns 4.01
         * 4.006.Round(2);
         * // returns 4100
         * (4060).Round(-2);
         */
        Round?(precision?: number): number;

        /**
         * Rounding off a number
         *
         * @param precision Number of digits used for rounding
         *
         * @example
         * // returns 4
         * 4.006.Floor();
         * // returns 0.04
         * 0.046.Floor(2);
         * // returns 4000
         * (4060).Floor(-2);
         */
        Floor?(precision?: number): number;

        /**
         * Rounding up a number
         *
         * @param precision Number of digits used for rounding
         *
         * @example
         * // returns 5
         * 4.006.Ceil();
         * // returns 6.01
         * 6.004.Ceil(2);
         * // returns 6100
         * (6040).Ceil(-2);
         */
        Ceil?(precision?: number): number;

        /**
         * number of digits before the decimal point
         *
         * @example
         * // returns 1
         * (1.5).Numerals();
         * (1).Numerals();
         * // returns 2
         * (10).Numerals();
         */
        Numerals?(): number;

        /**
         * Number of digits after the decimal point
         *
         * @example
         * // returns 0
         * (1).DecimalPlaces();
         * // returns 1
         * (1.5).DecimalPlaces();
         */
        DecimalPlaces?(): number;
    }
}
