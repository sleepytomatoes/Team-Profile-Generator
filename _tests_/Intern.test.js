const Intern = require('../lib/Intern')

describe("Intern", () => {
    // this first test makes sure that values are stored correctly when passed in as arguments.
    describe("Initialization via constructor", () => {
        it("should set school as its fourth parameter", () => {
            const testSchool = "Yale";
            const intern = new Intern("Harry", "okay@gmail.com", 5, testSchool);

            expect(intern.school).toEqual(testSchool)
        })
    })

    describe("Intern methods", () => {
         // the following two methods are tested to make sure they return the desired value when called.
        it("getSchool() should return this.school", () => {
            const testSchool = "Yale";
            const intern = new Intern("Harry", "okay@gmail.com", 5, testSchool);

            expect(intern.getSchool()).toEqual(testSchool);
        })

        it("getRole() should return 'Intern'", () => {
            const testRole = "Intern";
            const newIntern = new Intern("Emily", "okay@gmail.com", 8, "Harvard");

            expect(newIntern.getRole()).toEqual(testRole);
        })
    })
})