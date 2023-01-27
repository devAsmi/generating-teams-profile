const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("Creating Engineer Object", () => {
    const er = new Engineer("dev", "6", "xyz@gmail.com", "devasmi");
    expect(er instanceof Engineer).toEqual(true);
  });
  it("should return the id of Engineer when getId is called", () => {
    const n = new Engineer("dev", "6", "xyz@gmail.com", "devasmi");
    expect(n.getId()).toEqual("6");
  });
  it("should return the name of engineer when getName is called", () => {
    const n = new Engineer("dev", "6", "xyz@gmail.com", "devasmi");
    expect(n.getName()).toEqual("dev");
  });
  it("should return the email of the engineer when getEmail is called", () => {
    const n = new Engineer("dev", "6", "xyz@gmail.com", "devasmi");
    expect(n.getEmail()).toEqual("xyz@gmail.com");
  });
  it("should return the email of the engineer when getEmail is called", () => {
    const n = new Engineer("dev", "6", "xyz@gmail.com", "devasmi");
    expect(n.getGithub()).toEqual("devasmi");
  });
  it("should return engineer string when getRole is called", () => {
    const man = new Engineer("dev", "6", "xyz@gmail.com", "devasmi");
    expect(man.getRole()).toEqual("Engineer");
  });
});
