export enum Color {Red, Green}

export class Types {
    isOk: boolean = true;
    age: number = 42;
    ageString: string = `age is ${this.age}`;
    list: number[] = [1, 2, 3];
    tuple: [string, number] = ['ok', 1];
    hair: Color = Color.Red;
    eyes: Color = Color.Green;
}