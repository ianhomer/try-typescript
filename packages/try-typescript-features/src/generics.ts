function clone<T>(source: T): T {
  console.log(`Cloning ${JSON.stringify(source)}`);
  return Object.assign({}, source);
}

export default () => {
  console.log("running generics");
  const x = clone({ a: 1, b: 2 });
  console.log(x);
  console.log(x.a);
};
