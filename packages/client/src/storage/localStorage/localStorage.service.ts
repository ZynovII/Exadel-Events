export class LocalStorageService {
  static setToken(value: string) {
    localStorage.setItem('token', value);
  }
  static getToken(): string | null {
    return localStorage.getItem('token');
  }
}
