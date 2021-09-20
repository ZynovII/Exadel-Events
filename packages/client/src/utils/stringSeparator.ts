export const stringSeparator = (str: string) => {
  if (str.length > 100) {
    return str.slice(0, 100).concat('...');
  }
  return str;
};
