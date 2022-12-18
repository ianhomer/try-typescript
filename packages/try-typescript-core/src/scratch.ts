interface Song {
  title: string;
  length?: number;
}

class Foo {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  run() {
    console.log('Running foo');
    const songs: Song[] = [
      { title: 'Song 1', length: 300 },
      { title: 'Song 2' },
    ];
    console.log(JSON.stringify(songs));
  }
}

export default () => {
  const foo = new Foo('foo-name');
  foo.run();
};
