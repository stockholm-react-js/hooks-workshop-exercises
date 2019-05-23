import { languages } from './constants'

export function fakeApiPromise(result, delay = {}) {
  const { min = 50, max = 500 } = delay;
  const randomDelay = Math.floor(min + Math.random() * (max - min));
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(result);
    }, randomDelay);
  });
}

export const findLanguages = (search) => {
  const matchingLanguages = languages.filter(lang => lang.toLowerCase().startsWith(search.trim().toLowerCase()));
  return fakeApiPromise(matchingLanguages)
};
