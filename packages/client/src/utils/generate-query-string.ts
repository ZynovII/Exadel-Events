export function generateQueryString(obj: any): string {
  return Object.keys(obj)
    .map((key) => `_${key}=${obj[key]}`)
    .join('&');
}
