import { getCurrentYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utility Functions', () => {

  // Test 1
  test('getCurrentYear returns the current year', () => {
    const realDate = Date;
    global.Date = class extends realDate {
      constructor(dateString) {
        if (dateString) {
          return new realDate(dateString);
        }
        return new realDate('2025-01-01T00:00:00.000Z');
      }
    };
    expect(getCurrentYear()).toBe(2025);
    global.Date = realDate;
  });

  // Test 2
  test('getFooterCopy returns "Holberton School" when isIndex is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  // Test 3
  test('getFooterCopy returns "Holberton School main dashboard" when isIndex is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  // Test 4
  test('getLatestNotification returns "<strong>Urgent requirement</strong> - complete by EOD"', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
