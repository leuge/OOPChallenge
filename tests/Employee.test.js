const Employee=require("../lib/Employee")
test("test Employee's properties", () => {
    const employee = new Employee('Dave',1,'email.com');
  
    expect("Dave").toEqual(employee.getName());
    expect(1).toEqual(employee.getId());
  
    expect("email.com").toEqual(employee.getEmail());
    
  });