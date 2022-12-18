import { greeter } from './greeter';

describe('Greeter', () => {
  it('should return greeting', () => {
    const user = { firstName: 'Jane', lastName: 'User' };
    expect(greeter(user)).toBe('Hello, Jane User');
  });
});
