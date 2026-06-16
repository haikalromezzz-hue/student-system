import {
describe,
it,
expect
}
from "vitest";

import {
validateName,
validateEmail,
validatePassword
}
from "../js/validation.js";

describe("Validation Test",()=>{

it("Nama Sah",()=>{

expect(
validateName("Ali")
).toBe(true);

});

it("Email Sah",()=>{

expect(
validateEmail("ali@gmail.com")
).toBe(true);

});

it("Password Sah",()=>{

expect(
validatePassword("123456")
).toBe(true);

});

});