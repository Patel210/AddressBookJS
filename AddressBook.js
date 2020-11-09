class Contact {
    constructor(...parameters) {
        this.firstName = parameters[0];
        this.lastName = parameters[1];
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        this.zip = parameters[5];
        this.phoneNumber = parameters[6];
        this.email = parameters[7];
    }
    
    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(firstName)) {
            this._firstName = firstName;    
        }
        else throw "Incorrect First Name!";
    }

    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(lastName)) {
            this._lastName = lastName;    
        }
        else throw "Incorrect Last Name!";
    }

    get address() {
        return this._address;
    }
    set address(address) {
        let addressRegex = RegExp('^[A-Za-z]{1}[A-Za-z\\s]{3,}$');
        if (addressRegex.test(address)) {
            this._address = address;
        }
        else throw "Invalid Address!";
    }

    get city() {
        return this._city;
    }
    set city(city) {
        let cityRegex = RegExp('^[A-Za-z]{1}[A-Za-z\\s]{3,}$');
        if (cityRegex.test(city)) {
            this._city = city;
        }
        else throw "Invalid City!";
    }

    get state() {
        return this._state;
    }
    set state(state) {
        let stateRegex = RegExp('^[A-Za-z]{1}[A-Za-z\\s]{3,}$');
        if (stateRegex.test(state)) {
            this._state = state;
        }
        else throw "Invalid State!";
    }

    get zip() {
        return this._zip;
    }
    set zip(zip) {
        let zipRegex = RegExp('^[1-9]{1}[0-9]{5}$');
        if (zipRegex.test(zip)) {
            this._zip = zip;
        } 
        else throw "Invalid Zip!"; 
    }

    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^([+][0-9]{2,3}[\\s]){0,1}[1-9]{1}[0-9]{9}$');
        if (phoneNumberRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        }
        else throw "Invalid Phone Number!";
    }

    get email() {
        return this._email;
    }
    set email(email) {
        let emailRegex = RegExp("^[a-z0-9]+(([\\.+-][a-z0-9]{1,})?)+@[a-z0-9]+\\.([a-z]{2,4})+((\\.[a-z]{2,4})?)$");
        if (emailRegex.test(email)) {
            this._email = email;
        }
        else throw "Invalid Email!";
    }

    toString() {
        return "First Name = " + this.firstName + ", Last Name = " + this.lastName + ", Address = " + this.address +
               ", City = " + this.city + ", State = " + this.state + ", Zip = " + this.zip + ", Phone Number = " + 
               this.phoneNumber + ", Email = " + this.email;
    }
}

function addContactToAddressBook(contact, addressBook) {
    let result = addressBook.find(contactObj => {
        return contactObj.firstName == contact.firstName && contactObj.lastName == contact.lastName;
    });
    if (!result) {
        addressBook.push(contact);
    } else {
        throw "Contact By That Name Already Present";
    }
}

function findContact(firstName, lastName, addressBook) {
    let contact;
    addressBook.forEach(contactObj => {
        if (contactObj.firstName == firstName && contactObj.lastName == lastName) {
            contact = contactObj;
        }
    });
    return contact;
}

function updateContact(property, value, contact) {
    try {
        switch (property) {
            case "First Name":
                contact.firstName = value;
                break;
            case "Last Name":
                contact.lastName = value;
                break;
            case "Address":
                contact.address = value;
                break;
            case "City":
                contact.city = value;
                break;
            case "State":
                contact.state = value;
                break;
            case "Zip":
                contact.zip = value;
                break;
            case "Phone Number":
                contact.phoneNumber = value;
                break;
            case "Email":
                contact.email = value;
                break;
            default:
                break;
        }
    } catch (error) {
        console.log(error);
        console.log("Unable to Update!");
    }
}

function deleteContact(firstName, lastName, addressBook) {
    let contact = findContact(firstName, lastName, addressBook);
    if (contact != null) {
        return addressBook.filter(contactObj => contactObj != contact);
    } else {
        console.log("Contact Not Found!");
    }
}

function getContactCount(addressBook) {
    return addressBook.reduce(count => count+1, 0);
}

function getContactsInParticularCity(city) {
    return addressBook.filter(contact => contact.city == city);
}

function getContactsInParticularState(state) {
    return addressBook.filter(contact => contact.state == state);
}

let addressBook = new Array();
try {
    addContactToAddressBook(new Contact("Praket", "Parth", "Hauz Khas", "New Delhi", "Delhi",
                                110016, 9876543210, "praket.parth@gmail.com"), addressBook);
    addContactToAddressBook(new Contact("Vishal", "Gupta", "Malta Road", "Jaipur", "Rajasthan",
                                330016, "+91 9876543210", "vishal.gupta@gmail.com"), addressBook);
    addContactToAddressBook(new Contact("Vaishali", "Sharma", "Santa Cruz", "Mumbai", "Maharashtra",
                                210016, "+91 9876546789", "vaishali.s.sharma@gmail.com"), addressBook);
} catch (error) {
    console.log(error);
}
console.log("Contacts: ");
addressBook.forEach(contact => console.log(contact.toString()));

let contact = findContact("Praket", "Parth", addressBook);
updateContact("Last Name", "Sharma", contact);
updateContact("Email", "praket.sharma@gmail.com", contact);
console.log("Updated Contact: " + contact.toString());

addressBook = deleteContact("Praket", "Sharma", addressBook);
console.log("Contacts: ");
addressBook.forEach(contact => console.log(contact.toString()));

let contactCount = getContactCount(addressBook);
console.log("Number of Contacts: " + contactCount);

try {
    addContactToAddressBook(new Contact("Vaishali", "Sharma", "Andheri", "Mumbai", "Maharashtra",
                                    220016, 9876546780, "vaishali.sharma@gmail.com"), addressBook);
} catch (error) {
    console.log(error);
}

let city = "Jaipur";
let contactsInParticularCity = getContactsInParticularCity(city);
console.log("Contacts in " + city + ":");
contactsInParticularCity.forEach(contact => console.log(contact.toString()));
let state = "Maharashtra";
let contactsInParticularState = getContactsInParticularState(state);
console.log("Contacts in " + state + ":");
contactsInParticularState.forEach(contact => console.log(contact.toString()));