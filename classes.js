var car = /** @class */ (function () {
    function car(engine) {
        this.engine = engine;
    }
    car.prototype.disp = function () {
        console.log("Engine is : " + this.engine);
    };
    return car;
}());
