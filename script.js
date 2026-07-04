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
    city: "New York",
    item: [
        {
            name: "Apple",
            price: 100,
            variants: [
                {
                    color: "Red",
                    batery: 5000,
                    warranty: "1 year"
                },
                {
                    color: "Black",
                    batery: 5500,
                    warranty: "2 year"
                }
            ]
        },
        {
            name: "Asus",
            price: 200
        },
        {
            name: "Samsung",
            price: 300
        },
        {
            name: "Nokia",
            price: 400
        }
    ],
    my_family: {
        father: "Abepala",
        mother: "Devika",
        brother: "Thisara",
        sister: "Jithmi"
    }
};
console.log(customer);
console.log(customer.full_name);
console.log(customer.mobile_number);
console.log(customer.email);
console.log(customer.age);
console.log(customer.city);
console.log(customer.item);
console.log(customer.my_family);
console.log(customer.my_family.father);
console.log(customer.item[1]);
console.log(customer.item[1].name);
console.log(customer.item[0].variants[1].color);