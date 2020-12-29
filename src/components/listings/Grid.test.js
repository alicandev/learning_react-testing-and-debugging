import data from '../../data/courses.json';

const numItems = data.length;

test('Number of items is 12', () => {
  expect(numItems).toBe(12);
});

test('Number of items is greater than or equal to 12', () => {
  expect(numItems).toBeGreaterThanOrEqual(12);
});

const dataTest = data[0].title;

test('There is a JS in this title', () => {
  expect(dataTest).toMatch(/JS/);
});

test('The title contains React', () => {
  expect(dataTest).toContain('React');
});

// Arrays
const data2 = ['React Native', 'React']

test('The list of courses contain React Native and React', () => {
  expect(['React Native', 'React', 'MeteorJS']).toEqual(expect.arrayContaining(data2))
});

// Objects
test('The first course has a property title', () => {
  expect(data[0]).toHaveProperty('title');
});

test('The first course has a property title and value of 31,266', () => {
  expect(data[0]).toHaveProperty('title', '31,266');
});

