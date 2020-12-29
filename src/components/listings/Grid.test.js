import data from '../../data/courses.json';
import { test } from 'jest-snapshot/build/mock_serializer'

const numItems = data.length;

test('Number of items is 12', () => {
  expect(numItems).toBe(12);
});

test('Number of items is greater than or equal to 12', () => {
  expect(numItems).toBeGreaterThanOrEqual(12);
});