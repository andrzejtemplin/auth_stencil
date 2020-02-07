export class ValidationHelper {
  public static validatePesel(value: string): boolean {
    const pesel: any[] = [...value];

    let checksum =
      9 * pesel[0] +
      7 * pesel[1] +
      3 * pesel[2] +
      1 * pesel[3] +
      9 * pesel[4] +
      7 * pesel[5] +
      3 * pesel[6] +
      1 * pesel[7] +
      9 * pesel[8] +
      7 * pesel[9];
      
    if (checksum % 10 === parseInt(pesel[10])) {
      return true;
    }
    return false;
  }
}
