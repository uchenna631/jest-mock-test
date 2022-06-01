/**
 * @jest-environment jsdom
 */

const buttonClick = require("../js/button");

beforeAll(() => {
    document.body.innerHTML = "<p id='par'></p>"
});

describe("DOM tests", () => {
    test("Expect p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You clicked");
    })
})