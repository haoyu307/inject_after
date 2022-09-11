const main = () => {
    const hourRange = 24;
    const minuteRange = 60;

    const {at: hourList, value: hourValue} = getMaxValue(hourRange, 2);
    const {at: minuteList, value: minuteValue} = getMaxValue(minuteRange, 2);

    const returnList = [];
    hourList.forEach((hourItem) => {
        minuteList.forEach((minuteItem) => {
            returnList.push({
                hour: hourItem,
                minute: minuteItem,
            });
        });
    });
    return {
        candidates: returnList,
        maxValue: hourValue + minuteValue,
    };
};

exports.calculate = main;

/**
 * * calculate the point in the range that uses the most LED, and it's LED count
 * @param {number} range
 * @param {number} digitCount
 * @return {at: array<number>, value: number}
 */
const getMaxValue = (range, digitCount) => {
    let currentValue = 0;
    let tempMax = 0;
    let tempTime = [];
    while (currentValue < range) {
        const required = calcRequiredLedCount(currentValue, digitCount);
        if (required > tempMax) {
            tempMax = required;
            tempTime = [currentValue];
        } else if (required === tempMax) {
            tempTime.push(currentValue);
        }
        currentValue++;
    }
    return {
        at: tempTime,
        value: tempMax,
    };
};

/**
 *
 * * calculate required LED count for any positive integer value
 * @param {number} value positive
 * @param {number} digitCount
 * @return {number}
 */
const calcRequiredLedCount = (value, digitCount = 1) => {
    if (value !== parseInt(value, 10) || value < 0) return 0;
    if (value === 0) return REQUIRED_LED_COUNT_LIST[0];

    let result = 0;
    result +=
        Math.max(digitCount - value.toString().length, 0) *
        REQUIRED_LED_COUNT_LIST[0];

    let temp = value;
    while (temp > 0) {
        const lastDigit = temp % 10;
        result += REQUIRED_LED_COUNT_LIST[lastDigit];
        temp = Math.floor(temp / 10);
    }
    return result;
};

const REQUIRED_LED_COUNT_LIST = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];
