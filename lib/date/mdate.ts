export default class MDate {
  private _date: Date

  constructor(year: number, month: number, date: number) {
    this._date = new Date(year, month - 1, date)
  }

  public get year(): number {
    return this._date.getFullYear()
  }
  public set year(y: number) {
    this.year = y
  }

  public get month(): number {
    return this._date.getMonth() + 1
  }
  public set month(m: number) {
    this.month = m
  }

  public get date(): number {
    return this._date.getDate()
  }
  public set date(d: number) {
    this.date = d
  }
}
