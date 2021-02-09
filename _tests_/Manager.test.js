const Manager = require('../lib/Manager')

describe("Manager", () => {
    describe("Initialization via constructor", () => {
        it("should set officeNumber as this.officeNumber", () => {
            const testOfficeNumber = 14;
            const manager = new Manager("Victoria", "okay@gmail.com", 4, testOfficeNumber);
            
            expect(manager.officeNumber).toEqual(testOfficeNumber)
        })
        })

    describe("Manager methods", () => {
        it("getRole() should return 'Manager", () => {
            const testRole = "Manager";
            const manager = new Manager("Francis", "okay@gmail.com", 2, 12);

            expect(manager.getRole()).toEqual(testRole);
        })

        it("getofficeNumber() should return this.officeNumber", () => {
            const testOfficeNumber = 32;
            const manager = new Manager("Mark", "okay@gmail.com", 9, testOfficeNumber);

            expect(manager.getofficeNumber()).toEqual(testOfficeNumber)
        })
    })
    })
