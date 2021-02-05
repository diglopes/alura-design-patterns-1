export class Budget {
  constructor(private _value: number = 0) {}

  public get value(): number {
    return this._value;
  }
}
