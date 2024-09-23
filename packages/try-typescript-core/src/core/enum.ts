export enum Color {
  Red,
  Green,
}

export const enum ConstEnum {
  FOO,
  BAR,
  BEZ,
}

export type EnumAsConstValues = {
  FOO: 'FOO';
  BAR: 'BAR';
  BEZ: 'BEZ';
};

type ObjectValue<T> = T[keyof T];

export type EnumFromConst = ObjectValue<EnumAsConstValues>;
