// lodashAssign.spec.ts

import { assign } from '../src'

describe('assign', () => {
    it('should merge properties from multiple sources into the target object', () => {
        const target = { a: 1, b: 2 };
        const source1 = { b: 3, c: 4 };
        const source2 = { c: 5, d: 6 };

        const result = assign(target, source1, source2);

        expect(result).toEqual({ a: 1, b: 3, c: 5, d: 6 });
    });

    it('should handle null and undefined sources', () => {
        const target = { a: 1, b: 2 };
        const source1 = null;
        const source2 = undefined;

        const result = assign(target, source1, source2);

        expect(result).toEqual({ a: 1, b: 2 });
    });

    it('should not modify the target object when sources are empty', () => {
        const target = { a: 1, b: 2 };
        const originalTarget = { ...target };
        const result = assign(target);

        expect(result).toEqual(originalTarget);
    });

    it('should overwrite target properties with the last source properties', () => {
        const target = { a: 1, b: 2 };
        const source1 = { b: 3, c: 4 };
        const source2 = { c: 5, b: 6 };

        const result = assign(target, source1, source2);

        expect(result).toEqual({ a: 1, b: 6, c: 5 });
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
