/**
 * @jest-environment jsdom
 */

const buttonClick = require("../js/button");

beforeEach(() => {    
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("Expect p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You clicked");
    })

    test("Contains h1 element", () => {
        expect(document.getElementsByTagName("h1").length).toEqual(1);
    })
})