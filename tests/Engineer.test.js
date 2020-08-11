const Engineer=require("../lib/Engineer")
test("test Engineer's properties", () => {
    const engineer = new Engineer('Dave',1,'email.com','dave123');
  
    expect("Dave").toEqual(engineer.getName());
    expect(1).toEqual(engineer.getId());
  
    expect("email.com").toEqual(engineer.getEmail());
    expect("dave123").toEqual(engineer.getGithub());
   
  });