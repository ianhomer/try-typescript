import { Color, ConstEnum, EnumFromConst } from './enum';

describe('Enums', () => {
  it('should enums be OK', () => {
    const color = Color.Red;
    expect(color).toBe(Color.Red);
  });
  it('should const enums be OK', () => {
    const value = ConstEnum.BAR;
    expect(value).toBe(ConstEnum.BAR);
  });
  it('should const enum from const be OK', () => {
    const value: EnumFromConst = 'FOO';
    expect(value).toBe('FOO');
  });
});
