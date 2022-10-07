import 'mocha';

import { expect } from 'chai';

import { greeter } from './greeter';

describe('Greeter', () => {
  it('should return greeting', () => {
    const user = { firstName: 'Jane', lastName: 'User' };
    expect(greeter(user)).to.equal('Hello, Jane User');
  });
});
