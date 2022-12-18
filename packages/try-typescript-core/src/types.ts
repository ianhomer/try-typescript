export type Varierty = string | number | Date;

export enum Status {
  Open = 'open',
  Closed = 'closed',
  InProgress = 'in-progress',
}

export type Color = 'red' | 'blue' | 'yellow';

interface Song {
  name: string;
  length: number;
  date: Date;
}

export type SongField = keyof Song;

// index accessed type
export type Length = Song['length'];
