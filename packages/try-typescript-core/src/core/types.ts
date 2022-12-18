export enum Color {
  Red,
  Green,
}

type UnionOfStringOrNumber = string | number;

type Phone = {
  number: string;
};

type Email = {
  email: string;
};
type IntersectionOfEmailAndPhone = Email & Phone;

export class Types {
  public readonly isOk: boolean = true;
  public readonly age: number = 42;
  public readonly ageString: string = `age is ${this.age}`;
  public readonly list: number[] = [1, 2, 3];
  public readonly tuple: [string, number] = ['ok', 1];
  public readonly hair: Color = Color.Red;
  public readonly eyes: Color = Color.Green;
  public readonly stringOrNumber: UnionOfStringOrNumber = 'foo';
  public readonly phoneAndEmail: IntersectionOfEmailAndPhone = {
    number: '01234 567 890',
    email: 'foo@test.com',
  };
}

export interface OneDimensional {
  width: number;
}

export interface TwoDimensional extends OneDimensional {
  length: number;
}

export interface ThreeDimensional extends TwoDimensional {
  height: number;
}

export class Box implements ThreeDimensional {
  width: number;
  length: number;
  height: number;

  constructor(width = 10, length = 15, height = 20) {
    this.width = width;
    this.length = length;
    this.height = height;
  }
}

export class CardboardBox extends Box {}
