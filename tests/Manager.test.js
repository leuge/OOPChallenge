const Manager=require("../lib/Manager")
test("test Manager's properties", () => {
    const manager = new Manager('Dave',1,'email.com',13);
  
    expect("Dave").toEqual(manager.getName());
    expect(1).toEqual(manager.getId());
  
    expect("email.com").toEqual(manager.getEmail());
    expect(13).toEqual(manager.getOfficeNumber());
   
  });