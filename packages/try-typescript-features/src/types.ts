type Varierty = string | number | Date;

enum Status {
  Open = "open",
  Closed = "closed",
  InProgress = "in-progress",
}

export default () => {
  console.log("running types");
  const x: Varierty = "foo";
  const y: Varierty = 123;

  console.log(`${x} : ${y}`);

  const status = Status.Open;

  console.log(status);
};
