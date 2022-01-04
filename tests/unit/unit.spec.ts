function sum(a: number, b: number): number {
    return a + b;
}

describe('TEST', () => {
    it('Should Pass', () => {
        expect(sum(1, 2)).toBe(3);
    });
});
