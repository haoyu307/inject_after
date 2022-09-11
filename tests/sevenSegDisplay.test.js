const sevenSegDisplayModule = require('../src/sevenSegDisplay');

const {candidates: resultList, maxValue} = sevenSegDisplayModule.calculate();

test('test for validity of the result', () => {
    expect(resultList.length).toBeGreaterThan(0);
    resultList.forEach((resultItem) => {
        const {hour, minute} = resultItem;
        expect(hour).toBeGreaterThanOrEqual(0);
        expect(hour).toBeLessThan(24);
        expect(minute).toBeGreaterThanOrEqual(0);
        expect(minute).toBeLessThan(60);
    });
});

// * at least, the max value should be greater than 8 - 11:11
// * and more specifically, the result should be 26
test('test for the max value of the result', () => {
    expect(maxValue).toBeGreaterThanOrEqual(8);
    expect(maxValue).toBe(26);
});
