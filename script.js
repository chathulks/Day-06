class Customer {
    full_name;
    mobile_number;
    email;
    age;
    city;

    constructor(full_name, mobile_number, email, age, city) {
        this.full_name = full_name;
        this.mobile_number = mobile_number;
        this.email = email;
        this.age = age;
        this.city = city;
    }
}

var cus_1 = new Customer("John Doe", "1234567890", "john.doe@example.com", 30, "New York");
console.log(cus_1);

//--------------------------------------------------------------

let customer = {
    full_name: "John Doe",
    mobile_number: "1234567890",
    email: "john.doe@example.com",
    age: 30,
    city: "New York"
};
console.log(customer);

//--------------------------------------------------------------