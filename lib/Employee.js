//es6 constructor
// let, const
// ,()=>{},
class Employee {
    constructor(name,id,email){
        this.name=name
        this.id=id
        this.email=email
    }

    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }

}

module.exports=Employee

    /*name {
        this.
    }

    id {

    }

    email {

    }

    getName ()

    getID ()

    getEmail ()

    getRole ()
}*/

//    dog{
//        name:"wolfy",
//        age:10
//    }
//    cat{
//        name:"meow",
//        age:5
//    }

//es5 contructor
//    function Animal(name,age){
//        this.name=name
//        this.age=age
//    }

//    var dog=new Animal("wolfy",12)
//    var cat = new Animal("meow",5)
//    var pig=new Animal("onk",3)