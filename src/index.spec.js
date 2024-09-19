const { removeNulls, removeValues } = require('./index'); // Adjust the path if necessary

describe('json-friendly-cleaner', () => {

    describe('removeNulls()', () => {
        test('should remove null values from a flat object', () => {
            const data = { name: 'John', age: null, city: 'New York' };
            const result = removeNulls(data);
            expect(result).toEqual({ name: 'John', city: 'New York' });
        });

        test('should remove null values from a nested object', () => {
            const data = { name: 'John', address: { city: 'New York', zip: null }, hobbies: [null, 'sports'] };
            const result = removeNulls(data);
            expect(result).toEqual({ name: 'John', address: { city: 'New York' }, hobbies: ['sports'] });
        });

        test('should remove null values from an array', () => {
            const data = [null, 'John', null, 'Doe'];
            const result = removeNulls(data);
            expect(result).toEqual(['John', 'Doe']);
        });

        test('should return the same value if it is not an object or array', () => {
            expect(removeNulls(null)).toBe(null);
            expect(removeNulls('John')).toBe('John');
            expect(removeNulls(123)).toBe(123);
        });

        test('should return an empty object if all values are null', () => {
            const data = { a: null, b: null, c: null };
            const result = removeNulls(data);
            expect(result).toEqual({});
        });

        test('should return an empty array if all values are null', () => {
            const data = [null, null, null];
            const result = removeNulls(data);
            expect(result).toEqual([]);
        });
    });

    describe('removeValues()', () => {
        test('should remove specified values from a flat object', () => {
            const data = { name: 'John', age: undefined, city: 'New York' };
            const result = removeValues(data, undefined);
            expect(result).toEqual({ name: 'John', city: 'New York' });
        });

        test('should remove multiple specified values from a flat object', () => {
            const data = { name: 'John', age: undefined, isActive: false, city: 'New York' };
            const result = removeValues(data, [undefined, false]);
            expect(result).toEqual({ name: 'John', city: 'New York' });
        });

        test('should remove specified values from a nested object', () => {
            const data = { name: 'John', address: { city: 'New York', zip: undefined }, hobbies: [null, 'sports', false, undefined] };
            const result = removeValues(data, [undefined, false]);
            expect(result).toEqual({ name: 'John', address: { city: 'New York' }, hobbies: [null, 'sports'] });
        });

        test('should handle values that are not in the exclude list', () => {
            const data = { name: 'John', age: 30, city: 'New York' };
            const result = removeValues(data, [undefined, null]);
            expect(result).toEqual({ name: 'John', age: 30, city: 'New York' });
        });

        test('should return the same value if it is not an object or array', () => {
            expect(removeValues(null, [undefined])).toBe(null);
            expect(removeValues('John', [undefined])).toBe('John');
            expect(removeValues(123, [undefined])).toBe(123);
        });

        test('should return an empty object if all values match the exclude list', () => {
            const data = { a: undefined, b: false, c: undefined };
            const result = removeValues(data, [undefined, false]);
            expect(result).toEqual({});
        });

        test('should return an empty array if all values match the exclude list', () => {
            const data = [undefined, false, undefined];
            const result = removeValues(data, [undefined, false]);
            expect(result).toEqual([]);
        });
    });

});
