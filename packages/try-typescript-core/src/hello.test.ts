import { hello } from './hello';

describe('Hello function', () => {
  it('should return hello world', () => {
    const result = hello();
    expect(result).toBe('Hello world!');
  });
});
