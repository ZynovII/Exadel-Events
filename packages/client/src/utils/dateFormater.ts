import { DateTimeFormatOptions } from 'luxon';
import i18n from '../i18n/i18n';

export const valuesInObjFromDateToString = (obj: any): any => {
  for (const key in obj) {
    if (obj[key] instanceof Date) {
      obj[key] = obj[key].toISOString();
    }
  }
  return obj;
};

export const valuesInArrayOfObjFromStringToDate = (arr: Array<any>): any => {
  arr.forEach((obj) => {
    for (const key in obj) {
      if (
        new Date(Date.parse(obj[key])) + '' !== 'Invalid Date' &&
        isNaN(obj[key])
      ) {
        obj[key] = new Date(obj[key]);
      }
    }
  });
  return arr;
};
export const valuesInObjFromStringToDate = (obj: any): any => {
  for (const key in obj) {
    if (
      new Date(Date.parse(obj[key])) + '' !== 'Invalid Date' &&
      isNaN(obj[key])
    ) {
      obj[key] = new Date(obj[key]);
    }
  }
  return obj;
};

export const dateToLocalString = (date?: Date): string | undefined => {
  const options: DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date?.toLocaleDateString(i18n.language, options);
};
