const injectAfterModule = require('../src/injectAfter');

test('test for new key', () => {
    const stack = {
        foo: 3,
        bar: 1,
    };
    const newStack = injectAfterModule.injectAfter(stack, 'foo', 'baz', 42);
    expect(newStack['baz']).toBe(42);
});

test('test for old key', () => {
    const stack = {
        foo: 21,
        bar: 13,
        baz: 31,
    };
    const newStack = injectAfterModule.injectAfter(stack, 'foo', 'baz', 42);
    expect(newStack['baz']).toBe(42);
});
