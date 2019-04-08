interface Person {
  readonly firstName: string;
  readonly lastName: string;
}

export function greeter(person: Person): string {
  return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
