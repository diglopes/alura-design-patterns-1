export interface Tax {
  compute: (value: number) => number;
}
