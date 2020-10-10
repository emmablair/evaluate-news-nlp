import { urlChecker } from '../js/urlChecker';

describe('Check for valid url', () => {
    test('should be valid url', () => {
        expect(urlChecker).toBeDefined();
    });
});