export interface Tax {
  readonly taxPercentage: number;
  compute: (value: number) => number;
}
