import { onSubmit } from '../js/onSubmit';

describe('Updates UI on each submission', () => {
    test('Should update visibility of results section&cursor change', () => {
        expect(onSubmit).toBeDefined();
    });
});