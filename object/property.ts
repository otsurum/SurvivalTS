const product = {
    name: "water",
    price: 100,
    getTaxIncludedPrice: function () {
        return Math.floor(this.price * 1.1);
    }, // method
    getTaxIncudedPrice2() {
        return Math.floor(this.price * 1.1);
    },
    shomikigen: new Date(2023, 0, 1),
}


const calculator = {
    sum(a, b) {
        return a + b;
    },
};

calculator.sum(1, 2);