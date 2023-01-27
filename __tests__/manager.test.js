const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("Creating Manager Object", () => {
    const m = new Manager("mm", "4", "abc@gmail.com", 248);
    expect(m instanceof Manager).toEqual(true);
  });

  it("should return manager string when getRole is called", () => {
    const man = new Manager("mm", "4", "abc@gmail.com", 248);
    expect(man.getRole()).toEqual("Manager");
  });

  it("should return manager officeNumber when getOfficeNumber is called", () => {
    const man = new Manager("mm", "4", "abc@gmail.com", 555);
    expect(man.getOfficeNumber()).toEqual(555);
  });

  it("should return the name of manager when getName is called", () => {
    const man = new Manager("mm", "4", "abc@gmail.com", 555);
    expect(man.getName()).toEqual("mm");
  });

  it("should return the email of the manager when getEmail is called", () => {
    const na = new Manager("mm", "4", "abc@gmail.com", 555);
    expect(na.getEmail()).toEqual("abc@gmail.com");
  });

  it("should return the id of manager when getId is called", () => {
    const n = new Manager("mm", "4", "abc@gmail.com", 555);
    expect(n.getId()).toEqual("4");
  });
});
