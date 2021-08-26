import { isUrlValid } from '../js/isUrlValid';

test('test if inputed url is valid', () => {
  expect(isUrlValid('any str')).toBeFalsy();
  expect(isUrlValid(78)).toBeFalsy();
  expect(isUrlValid('$2314nj jn545 $%%$$')).toBeFalsy();
  expect(isUrlValid('https://stackoverflow.com/')).toBeTruthy();
});
