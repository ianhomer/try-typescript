import { expect } from 'chai';
import 'mocha';
import { greeter } from './greeter';

describe('Greeter', () => {
  it('should return greeting', () => {
    const user = { firstName: 'Jane', lastName: 'User' };
    expect(greeter(user)).to.equal('Hello, Jane User');
  });
});
