

const add = (a, b) => a+b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;

test("should add two numbers", () => {
    const result = add(2, 2);
    // if (result !== 4){
    //     throw new Error(`you added 2 and 2, the result was ${result} instead of 4`)
    // }
    expect(result).toBe(4);
});

test("should generate greeting from name", () =>{
    const result = generateGreeting("CJ");
    expect(result).toBe(`Hello CJ!`);
})

test("should generate greeting for no name", () =>{
    const result = generateGreeting();
    expect(result).toBe("Hello Anonymous!");
})