import * as faker from 'faker';
import * as moment from 'moment';

export const getRandomFirstName = () => {
  return `E2E_${faker.name.firstName()}`;
}

export const getRandomLastName = () => {
  return `E2E_${faker.name.lastName()}`;
}

export const getRandomEmail = () => {
  return `E2E_${faker.internet.email()}`;
}

export const getRandomTitle = () => {
  return `E2E_${faker.random.words(3)}`
}

export const getRandomNotes = () => {
  return `E2E_${faker.lorem.words(5)}`
}

export const getRandomPercent = () => {
  return this.getRandomInt(0, 100);
}

export const getRandomBoolean = () => {
  return faker.random.boolean();
}

export const getRandomDate = () => {
  return moment().subtract(this.getRandomInt(3650, 7300), 'days').format('MM/DD/YYYY');
}

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export const parseDataTable = dataTable => {
  return dataTable['rawTable']
    .reduce((acc, curr) => {
      const key = curr[0];
      const value = curr[1];
      acc[key] = this[value]();
      return acc;
    }, {});
}
