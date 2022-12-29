let person = {
    firstName: 'David',
    lastname: 'James',
    state: 'Lagos',
    greet: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastname} and I stay at ${this.state}`);
    }
};

person.greet()