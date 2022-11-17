interface Nameable {
  name: string;
}

interface Person extends Nameable {
  dob: Date;
}

interface Band extends Nameable {
  name: string;
  members: Person[];
}

export default () => {
  const band: Band = {
    name: "Band 1",
    members: [
      { name: "bob", dob: new Date("01-01-1990") },
      { name: "sue", dob: new Date("01-01-1991") },
    ],
  };
  console.log(JSON.stringify(band));
};
