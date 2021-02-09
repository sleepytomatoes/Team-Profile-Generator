const Employee = require('../lib/Employee')

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create a new Employee object with a name, id, and email if valid arguments are provided", () => {

        const testEmployee = new Employee("Matt", "okay@gmail.com", 8)

        expect(testEmployee.name).toEqual("Matt");
        expect(testEmployee.email).toEqual("okay@gmail.com");
        expect(testEmployee.id).toEqual(8);
    });

    it("should throw an error if no arguments are provided", () => {
        const ghostEmployee = () => new Employee();

        expect(ghostEmployee).toThrow();
    })

    it("should throw an error if email is not a string", () => {
        const ghostEmployee = () => new Employee("Josh", 6, 4);
  
        const err = new Error("Expected email to be a string");

        expect(ghostEmployee).toThrowError(err);
      });
  
      it("should throw an error if 'name' is not a string", () => {
        const ghostEmployee = () => new Employee(3, "okay@gmail.com", 9);
        const err = new Error("Expected parameter 'name' to be a non-empty string");
  
        expect(ghostEmployee).toThrowError(err);
      });
  
      it("should throw an error if id is not a number", () => {
        const ghostEmployee = () => new Employee("Peter", "okay@gmail.com", "6");
        const err = new Error("Expected parameter id to be a non-negative number");
  
        expect(ghostEmployee).toThrowError(err);
      });
  
      it("should throw an error if 'id' is less than 0", () => {
        const ghostEmployee = () => new Employee("Elliot", "okay@gmail.com", -1);
        const err = new Error("Expected parameter 'age' to be a non-negative number");
  
        expect(ghostEmployee).toThrowError(err);
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


