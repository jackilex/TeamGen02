// TODO: Write code to define and export the Employee class
//super Class
class Employee{
    constructor(name,id,email,role){
        this._name=name;
        this._id=id;
        this._email=email;
        this._role=role
    }
    getName(){
        return this._name
    };

    getId(){
        return this._id
    };

    getEmail(){
        return this._email
    };

    getRole(){
        return this._role
    };
}

module.exports={Employee}
