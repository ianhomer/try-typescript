const trace = (
  target: any,
  property: string,
  descriptor: PropertyDescriptor,
) => {
  console.log(`decorating method ${property}() on ${target}`);
  const wrapped = descriptor.value;
  // Extend the functionality of the method
  descriptor.value = () => {
    const start = new Date().getUTCMilliseconds();
    console.log(`trace start : ${property}`);
    const result = wrapped.apply(this);
    console.log(
      `trace end : ${property} : ${new Date().getUTCMilliseconds() - start}ms`,
    );
    return result;
  };
};

const id = () => {
  return (target: any, propertyKey: string) => {
    console.log(`decorating property ${propertyKey}`);
    Object.defineProperty(target, propertyKey, {
      enumerable: true,
      get: () => {
        console.log(`getting ${propertyKey}`);
        return 'abc';
      },
    });
  };
};

class Foo {
  @id()
  name = 'foo';

  @trace
  async run() {
    console.log(`running`);
  }
}

export default () => {
  console.log('decorators');
  const foo = new Foo();
  foo.run();
  console.log(`name : ${foo.name}`);
};
