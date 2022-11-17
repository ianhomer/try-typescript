import assert = require("node:assert");

type Varierty = string | number | Date;

enum Status {
  Open = "open",
  Closed = "closed",
  InProgress = "in-progress",
}

type Color = "red" | "blue" | "yellow";

interface Song {
  name: string;
  length: number;
  date: Date;
}

type SongField = keyof Song;

// index accessed type
type Length = Song["length"];

export default () => {
  console.log("running types");
  const x: Varierty = "foo";
  const y: Varierty = 123;

  assert(x === "foo");
  assert(y === 123);

  const status = Status.Open;
  assert(status === Status.Open);

  const color: Color = "red";
  assert(color === "red");

  const fieldName: SongField = "name";
  assert(fieldName === "name");

  assert(typeof x === "string");

  const length: Length = 123;
  assert(length == 123);
};
