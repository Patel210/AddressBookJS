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

    toString() {
        return "First Name = " + this.firstName + ", Last Name = " + this.lastName + ", Address = " + this.address +
               ", City = " + this.city + ", State = " + this.state + ", Zip = " + this.zip + ", Phone Number = " + 
               this.phoneNumber + ", Email = " + this.email;
    }
}

let contact = new Contact("Praket", "Parth", "Hauz Khas", "New Delhi", "Delhi", 110016, 9876543210, "praket.parth@gmail.com");
console.log(contact.toString());