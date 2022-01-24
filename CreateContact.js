
class CreateContact {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNo;
    email;

    constructor(firstName, lastName, address, city, state, zip, phoneNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNo = phoneNo;
        this.email = email;
    }

    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        this._firstName = firstName;
    }

    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }

    get address() {
        return this._address;
    }
    set address(address) {
        this._address = address;
    }

    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }

    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }

    get zip() {
        return this._zip;
    }
    set zip(zip) {
        this._zip = zip;
    }

    get phoneNo() {
        return this._phoneNo;
    }
    set phoneNo(phoneNo) {
        this._phoneNo = phoneNo;
    }

    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }

    toString() {

        return "fistname=" + this.firstName + ",lastname=" + this.lastname + ",address=" + this.address + ", " +
            ",city=" + this.city + ",state=" + this.state + ",zip=" + this.zip + ",PhoneNo=" + this.phoneNo + ",EmailId=" +this.email;

    }
}

let contactArr = new Array();

const prompts = require("prompt-sync")();

let firstName = prompts("First name: ");
console.log(firstName);
let lastName = prompts("last name: ");
console.log(lastName);
let address = prompts("address: ");
console.log(address);
let city = prompts("city: ");
console.log(city);
let state = prompts("state: ");
console.log(state);
let zip = prompts("zip: ");
console.log(zip);
let phoneNo = prompts("phoneNo: ");
console.log(phoneNo);
let email = prompts("EmailId: ");
console.log(email);

contactArr.push(new CreateContact(firstName, lastName, address, city, state, zip, phoneNo, email));
console.log(contactArr);






