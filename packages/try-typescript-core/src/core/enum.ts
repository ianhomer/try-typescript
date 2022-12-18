export enum Color {
  Red,
  Green,
}

export const enum ConstEnum {
  FOO,
  BAR,
  BEZ,
}

const EnumAsConstValues = {
  FOO: 'FOO',
  BAR: 'BAR',
  BEZ: 'BEZ',
} as const;

type ObjectValue<T> = T[keyof T];

export type EnumFromConst = ObjectValue<typeof EnumAsConstValues>;
