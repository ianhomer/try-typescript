import { Color, Length, SongField, Status, Varierty } from './types';

describe('types', () => {
  it('should be OK', () => {
    const x: Varierty = 'foo';
    const y: Varierty = 123;

    expect(x).toBe('foo');
    expect(y).toBe(123);

    const status = Status.Open;
    expect(status).toBe(Status.Open);

    const color: Color = 'red';
    expect(color).toBe('red');

    const fieldName: SongField = 'name';
    expect(fieldName).toBe('name');

    expect(typeof x).toBe('string');

    const length: Length = 123;
    expect(length).toBe(123);
  });
});
