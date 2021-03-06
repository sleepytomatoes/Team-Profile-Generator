const Engineer = require('../lib/Engineer')

describe("Engineer", () => {
    // this first test makes sure that values are stored correctly when passed in as arguments.
    describe("Initialization via constructor", () => {
        it("should set github username as this.github", () => {
            const testGithub = "iheartcoding666";
            const engineer = new Engineer("Karen", "okay@gmail.com", 6, testGithub);

            expect(engineer.github).toEqual(testGithub)
        })
    })

    describe("Engineer methods", () => {
        // the following two methods are tested to make sure they return the desired value when called.
        it("getRole() should return 'Engineer'", () => {
            const testRole = "Engineer";
            const engineer = new Engineer("Alexa", "okay@gmail.com", 7, "gitusername")

            expect(engineer.getRole()).toEqual(testRole);
        })

        it("getGithub() should return the github username from axios", () => {
            const testGit = "fakegithubname12";
            const engineer = new Engineer("Maria", "okay@gmail.com", 4, testGit);

            expect(engineer.getGithub()).toEqual(testGit)
        })
    })
})