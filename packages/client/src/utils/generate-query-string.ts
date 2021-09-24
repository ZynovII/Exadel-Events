export function generateQueryString(obj: any): string {
  return Object.keys(obj)
    .map((key) => `${key}=${obj[key]}`)
    .join('&');
}
