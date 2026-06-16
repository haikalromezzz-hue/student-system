const validateEmail = required("./validation");

test("email valid", () => {
    expect(
        validateEmail("abc@gmail.com")
    ).toBe(true);
});

test("email tidak valid", () => {
    expect(
        validateEmail("abc@gmail.com")
    ).toBe(false);
})