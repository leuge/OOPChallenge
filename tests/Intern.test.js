const Intern=require("../lib/Intern")
test("test Intern's properties", () => {
    const intern = new Intern('Dave',1,'email.com','UCLA');
  
    expect("Dave").toEqual(intern.getName());
    expect(1).toEqual(intern.getId());
  
    expect("email.com").toEqual(intern.getEmail());
    expect("UCLA").toEqual(intern.getSchool());
   
  });