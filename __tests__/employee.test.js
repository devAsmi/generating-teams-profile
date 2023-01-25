const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Creating Employee Object", () => {
    it("should create an employee", () => {
      const e = new Employee("a", "1", "abc@xyz.com");
      expect(e instanceof Employee).toEqual(true);
    });

    it("should return Employee string when getRole is called", () => {
      const n = new Employee("q", "3", "asd@gmail.com");
      expect(n.getRole()).toEqual("Employee");
    });

    it("should return the id of employee when getId is called", () => {
      const n = new Employee("q", "3", "asd@gmail.com");
      expect(n.getId()).toEqual("3");
    });
    it("should return the name of employee when getName is called", () => {
      const n = new Employee("t", "3", "asd@gmail.com");
      expect(n.getName()).toEqual("t");
    });
    it("should return the email of the employee when getEmail is called", () => {
      const n = new Employee("q", "3", "apd@gmail.com");
      expect(n.getEmail()).toEqual("apd@gmail.com");
    });
  });
});
