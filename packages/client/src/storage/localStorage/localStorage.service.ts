import jwt from 'jsonwebtoken';

const isDefaultTheme = 'isDefaultTheme';
const token = 'token';

export class LocalStorageService {
  static setToken(value: string | undefined) {
    value && localStorage.setItem(token, value);
  }
  static getToken(): string {
    return localStorage.getItem(token) || '';
  }
  static isTokenAlive(): boolean {
    const decoded = jwt.decode(this.getToken());
    if (
      typeof decoded === 'string' ||
      decoded === null ||
      decoded.exp === undefined
    )
      return false;
    return decoded.exp * 1000 >= Date.now();
  }
  static removeToken(): void {
    localStorage.removeItem(token);
  }
  static toggleTheme(): void {
    localStorage.setItem(
      isDefaultTheme,
      (!this.getIsDefaultTheme()).toString()
    );
  }
  static setIsDefaultTheme(value: boolean): void {
    localStorage.setItem(isDefaultTheme, value.toString());
  }
  static getIsDefaultTheme(): boolean {
    return localStorage.getItem(isDefaultTheme) === 'false' ? false : true;
  }
}
