// person, employee, customer

class Person {
    constructor(firstName, lastName, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

getFullName() {

return this.firstName + " " + this.lastName();
}

}
class Employee extends Person {
    constructor(firstName, lastName, phoneNumber, email) {
        super(firstName, lastName, phoneNumber, email);
    }
    }

    class Customer extends Person {
    constructor(firstName, lastName, phoneNumber, email) {
        super(firstName, lastName, phoneNumber, email);
    }
      
    }

    const emp1 = new Employee("Dav", "S", "0225672934", "dav@example.com");
    const customer1 = new Employee("Stu", "D", "0225672934", "stu@example.com");

    console.log(emp1);
    console.log(customer1);