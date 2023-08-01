import { assign } from '../src'

describe('assign', () => {
    it('handles both null input', () => {
        const result = assign(null, null)
        expect(result).toEqual({});
    });

    it('handles null first input', () => {
        const result = assign({ a: '1' }, null)
        expect(result).toEqual({ a: '1' });
    });

    it('handles null last input', () => {
        const result = assign(null,{ a: '1' })
        expect(result).toEqual({ a: '1' });
    });

    it('correctly assign a with values from b', () => {
        const target = { a: 2, b: 2 };
        const result = assign(target, {});
        expect(result).toEqual(target);
    });

    it('handles target have unique value', () => {
        const source = { a: 3, b: 5 };
        const result = assign({}, source);
        expect(result).toEqual(source);
    });

    it('handles source have unique value', () => {
        const target = { a: 2, b: 2 };
        const source = { a: 3, b: 5 };
        const result = assign(target, source);
        expect(result).toEqual(source);
    });

    it('should merge nested properties correctly', () => {
        const target = { a: { b: 2, c: 3 } };
        const source1 = { a: { c: 4, d: 5 } };
        const source2 = { a: { d: 6, e: 7 } };
        const originTarget = { ...target }
        const result = assign(target, source1, source2);

        expect(result).toEqual({ a: { d: 6, e: 7 } });
        expect(result).not.toBe(originTarget)
    });
});
