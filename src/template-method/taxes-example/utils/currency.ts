export class CurrencyUtil {
  public static toBRLFormat(value: number): string {
    return Intl.NumberFormat("pt-br", {
      currency: "BRL",
      style: "currency",
    }).format(value)
  }
}