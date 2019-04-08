interface Person {
  readonly firstName: string;
  readonly lastName: string;
}

function greeter(person: Person): string {
  return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

const user = { firstName: 'Jane', lastName: 'User' };

document.body.innerHTML = greeter(user);
