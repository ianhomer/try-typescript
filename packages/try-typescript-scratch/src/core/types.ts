export enum Color {
  Red,
  Green,
}

export class Types {
  public readonly isOk: boolean = true;
  public readonly age: number = 42;
  public readonly ageString: string = `age is ${this.age}`;
  public readonly list: number[] = [1, 2, 3];
  public readonly tuple: [string, number] = ['ok', 1];
  public readonly hair: Color = Color.Red;
  public readonly eyes: Color = Color.Green;
}

export class Box {
  width: number;
  height: number;

  constructor(width = 10, height = 20) {
    this.width = width;
    this.height = height;
  }
}
