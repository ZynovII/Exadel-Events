export const valuesInObjFromStringToDate = (obj: any): any => {
  for (const key in obj) {
    if (new Date(Date.parse(obj[key])) + '' !== 'Invalid Date' && isNaN(obj[key])) {
      obj[key] = new Date(obj[key]);
    }
  }
  return obj;
};
