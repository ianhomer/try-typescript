import 'mocha';

import { expect } from 'chai';

import { Box, CardboardBox, Color, Types } from './types';

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

  it('constructed box is instanceof Box', () => {
    const box: Box = new Box();
    expect(box instanceof Box).to.be.true;
  });

  it('fake box is not instance of Box', () => {
    const box: Box = { width: 10, height: 20 };
    expect(box instanceof Box).to.be.false;
  });

  it('cardboard box is instanceof Box', () => {
    const box: Box = new CardboardBox();
    expect(box instanceof Box).to.be.true;
  });
});
