import { Box, CardboardBox, Color, Types } from './types';

describe('Types', () => {
  it('should have types set', () => {
    const types = new Types();
    expect(types.isOk).toBeTruthy();
    expect(types.age).toBe(42);
    expect(types.ageString).toBe('age is 42');
    expect(types.list.length).toBe(3);
    expect(types.tuple[0]).toBe('ok');
    expect(types.tuple[1]).toBe(1);
    expect(types.hair).toBe(Color.Red);
    expect(types.eyes).toBe(Color.Green);
    expect(types.stringOrNumber).toBe('foo');
    expect(types.phoneAndEmail.email).toBe('foo@test.com');
  });

  it('constructed box is instanceof Box', () => {
    const box: Box = new Box();
    expect(box instanceof Box).toBeTruthy();
  });

  it('fake box is not instance of Box', () => {
    const box: Box = { width: 10, length: 15, height: 20 };
    expect(box instanceof Box).toBeFalsy();
  });

  it('cardboard box is instanceof Box', () => {
    const box: Box = new CardboardBox();
    expect(box instanceof Box).toBeTruthy();
  });
});
