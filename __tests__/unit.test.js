const { isPhoneNumber, isEmail, isStrongPassword, isDate, isHexColor } = require('../code-to-unit-test/unit-test-me.js');

// Test cases for isPhoneNumber
test('valid phone number should return true', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('invalid phone number should return false', () => {
  expect(isPhoneNumber('123')).toBe(false);
});

test('valid phone number with parentheses should return true', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid phone number with characters should return false', () => {
  expect(isPhoneNumber('123-456-789a')).toBe(false);
});

// Test cases for isEmail
test('valid email should return true', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('invalid email should return false', () => {
  expect(isEmail('test@')).toBe(false);
});

test('valid email with underscore should return true', () => {
  expect(isEmail('test_email@example.com')).toBe(true);
});

test('invalid email with missing domain should return false', () => {
  expect(isEmail('test@example')).toBe(false);
});

// Test cases for isStrongPassword
test('valid strong password should return true', () => {
  expect(isStrongPassword('Abcdefg1')).toBe(true);
});

test('invalid strong password with special characters should return false', () => {
  expect(isStrongPassword('Abcdefg1@')).toBe(false);
});

test('valid strong password with minimum length should return true', () => {
  expect(isStrongPassword('Ab1c')).toBe(true);
});

test('invalid strong password with only numbers should return false', () => {
  expect(isStrongPassword('1234567890')).toBe(false);
});

// Test cases for isDate
test('valid date should return true', () => {
  expect(isDate('05/28/2023')).toBe(true);
});

test('invalid date with incorrect format should return false', () => {
  expect(isDate('2023-05-28')).toBe(false);
});

test('valid date with single-digit month and day should return true', () => {
  expect(isDate('1/5/2023')).toBe(true);
});

test('invalid date with missing year should return false', () => {
  expect(isDate('05/28')).toBe(false);
});

// Test cases for isHexColor
test('valid hex color should return true', () => {
  expect(isHexColor('#FF0000')).toBe(true);
});

test('invalid hex color with special letters should return false', () => {
  expect(isHexColor('#abcd_')).toBe(false);
});

test('valid hex color without hash symbol should return true', () => {
  expect(isHexColor('FF0000')).toBe(true);
});

test('invalid hex color with too many characters should return false', () => {
  expect(isHexColor('#1234567')).toBe(false);
});
