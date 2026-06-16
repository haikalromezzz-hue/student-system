const {
  validateEmail,
  validateUsername,
  validateName
} = require("../js/validation");

test("email valid", () => {
  expect(validateEmail("test@gmail.com")).toBe(true);
});

test("email invalid", () => {
  expect(validateEmail("testgmail.com")).toBe(false);
});

test("username valid", () => {
  expect(validateUsername("Ali123")).toBe(true);
});

test("username empty", () => {
  expect(validateUsername("")).toBe(false);
});

test("name valid", () => {
  expect(validateName("Ali")).toBe(true);
});

test("name empty", () => {
  expect(validateName("")).toBe(false);
});