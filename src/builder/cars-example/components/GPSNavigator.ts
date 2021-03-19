export class GPSNavigator {
  constructor(
    private route: string = "221b, Baker Street, London  to Scotland Yard, 8-10 Broadway, London"
  ) {}

  public get getRoute(): string {
    return this.route
  }
}
