let car = {
    brand: 'Benz',
    model: 'G5x',
    year: 2020,
    spec: function() {
        console.log(`I bought a ${this.brand} ${this.model} ${this.year} model`);
    }
};

car.spec();