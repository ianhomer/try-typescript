interface Something {
  name: string;
}

declare namespace my {
  function log(message: string): void;
  function getSomething(): Something;
}

declare function doOverloaded(n: number): void;
declare function doOverloaded(s: string): string;

declare let thisIsAGlobalVariable: number;
