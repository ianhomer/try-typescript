import 'mocha';

import { expect } from 'chai';

import { Color, Types } from './types';

describe('Types', () => {
  it('should have types set', () => {
    const types = new Types();
    expect(types.isOk).to.equal(true);
    expect(types.age).to.equal(42);
    expect(types.ageString).to.equal('age is 42');
    expect(types.list.length).to.equal(3);
    expect(types.tuple[0]).to.equal('ok');
    expect(types.tuple[1]).to.equal(1);
    expect(types.hair).to.equal(Color.Red);
    expect(types.eyes).to.equal(Color.Green);
  });
});
