const Employee = require('../lib/Employee')

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create a new Employee object with a name, id, and email if valid arguments are provided", () => {

        const testEmployee = new Employee("Matt", "okay@gmail.com", 8)

        expect(testEmployee.name).toEqual("Matt");
        expect(testEmployee.email).toEqual("okay@gmail.com");
        expect(testEmployee.id).toEqual(8);
    });
  });

    describe("Employee methods", () => {
        it("should return the Employees name", () => {
            const testName = "Fabio";
            const employee = new Employee(testName, "okay@gmail.com", 5);
            
            expect(employee.getName()).toEqual(testName);
        })

       it("should return the Employees email", () => {
            const testEmail = "okay@gmail.com";
            const employee = new Employee("Fabio", testEmail, 6);

            expect(employee.getEmail()).toEqual(testEmail);
       })

       it("should return the Employees ID", () => {
           const testID = 7;
           const employee = new Employee("Helen", "okay@gmail.com", testID);

           expect(employee.getId()).toEqual(testID);
       })
  });
})


