const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("Creating Intern Object", () => {
    const ii = new Intern("dev", "6", "xyz@gmail.com", "georgiaTech");
    expect(ii instanceof Intern).toEqual(true);
  });
  it("should return the id of Intern when getId is called", () => {
    const n = new Intern("dev", "6", "xyz@gmail.com", "georgiaTech");
    expect(n.getId()).toEqual("6");
  });
  it("should return the name of Intern when getName is called", () => {
    const n = new Intern("dev", "6", "xyz@gmail.com", "georgiaTech");
    expect(n.getName()).toEqual("dev");
  });
  it("should return the email of the Intern when getEmail is called", () => {
    const n = new Intern("dev", "6", "xyz@gmail.com", "georgiaTech");
    expect(n.getEmail()).toEqual("xyz@gmail.com");
  });
  it("should return intern string when getRole is called", () => {
    const man = new Intern("dev", "6", "xyz@gmail.com", "devasmi");
    expect(man.getRole()).toEqual("Intern");
  });
});
