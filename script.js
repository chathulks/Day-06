// class Customer {
//     full_name;
//     mobile_number;
//     email;
//     age;
//     city;

//     constructor(full_name, mobile_number, email, age, city) {
//         this.full_name = full_name;
//         this.mobile_number = mobile_number;
//         this.email = email;
//         this.age = age;
//         this.city = city;
//     }
// }

// var cus_1 = new Customer("John Doe", "1234567890", "john.doe@example.com", 30, "New York");
// console.log(cus_1);

//--------------------------------------------------------------

// let customer = {
//     full_name: "John Doe",
//     mobile_number: "1234567890",
//     email: "john.doe@example.com",
//     age: 30,
//     city: "New York",
//     item: [
//         {
//             name: "Apple",
//             price: 100,
//             variants: [
//                 {
//                     color: "Red",
//                     batery: 5000,
//                     warranty: "1 year"
//                 },
//                 {
//                     color: "Black",
//                     batery: 5500,
//                     warranty: "2 year"
//                 }
//             ]
//         },
//         {
//             name: "Asus",
//             price: 200
//         },
//         {
//             name: "Samsung",
//             price: 300
//         },
//         {
//             name: "Nokia",
//             price: 400
//         }
//     ],
//     my_family: {
//         father: "Abepala",
//         mother: "Devika",
//         brother: "Thisara",
//         sister: "Jithmi"
//     }
// };
// console.log(customer);
// console.log(customer.full_name);
// console.log(customer.mobile_number);
// console.log(customer.email);
// console.log(customer.age);
// console.log(customer.city);
// console.log(customer.item);
// console.log(customer.my_family);
// console.log(customer.my_family.father);
// console.log(customer.item[1]);
// console.log(customer.item[1].name);
// console.log(customer.item[0].variants[1].color);

// document.write("<h1 class='text-danger'>Hello</h1>");
// console.log(document);
// console.log(document.title);

// var heading = document.getElementById("heading");
// heading.innerText = "Hello World";

// console.log(heading);

// let value = 0;
// function Btn(){
//     let count_text = document.getElementById("heading");
//     count_text.innerText = ++value;
// }
// function Btn2(){
//     let count_text = document.getElementById("heading");
//     count_text.innerText = --value;
// }

// function setValue() {
//     let txtInput = document.getElementById("inputText");
//     let heading = document.getElementById("heading");
//     heading.innerText = (inputText.value);
// }

// function addition(){

//     let val_one = document.getElementById("input_1");
//     let val_two = document.getElementById("input_2");

//     let lastValue = document.getElementById("output");

//     //parsewInt or Number use text to int...
//     lastValue.innerText = Number(val_one.value) + Number(val_two.value);
// }

// function minus(){

//     let val_one = document.getElementById("input_1");
//     let val_two = document.getElementById("input_2");

//     let lastValue = document.getElementById("output");

//     lastValue.innerText = (val_one.value) - (val_two.value);
// }
let CustomerArray = [];
function AddCustomerOnAction() {
    let txtName = document.getElementById("txtName").value;
    let txtMobile = document.getElementById("txtMobile").value;
    let txtEmail = document.getElementById("txtEmail").value;
    let txtAddress = document.getElementById("txtAddress").value;
    let txtAge = document.getElementById("txtAge").value;

    let Customer = {
        name: txtName,
        mobile: txtMobile,
        email: txtEmail,
        address: txtAddress,
        age: txtAge
    }

    CustomerArray.push(Customer);
    LoadCustomerTable();
    console.log(CustomerArray);

}

function LoadCustomerTable() {
    let body ="";
    let table = document.getElementById("cus_table");
    for (let index = 0; index < CustomerArray.length; index++) {
        body += `
        <tr>
            <td>${CustomerArray[index].name}</td>
            <td>${CustomerArray[index].mobile}</td>
            <td>${CustomerArray[index].email}</td>
            <td>${CustomerArray[index].address}</td>
            <td>${CustomerArray[index].age}</td>
        </tr>
    `;
    }

    table.innerHTML = body;
}