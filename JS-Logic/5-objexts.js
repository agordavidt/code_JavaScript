let car = {
    brand: 'Benz',
    model: 'G5x',
    year: 2020,
    spec: function() {
        console.log(`I bought a ${this.brand} ${this.model} ${this.year} model`);
    }
};

car.spec();
console.log(car.brand);
console.log(car.model);
console.log(car.year);
// add or modify the property of an object
car.build = 'SUV';
car.distance = '1000hrs'
console.log(car.distance);