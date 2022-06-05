"use strict";
// Module System with TypeScrip Class
exports.__esModule = true;
exports.Laptop = void 0;
var Laptop = /** @class */ (function () {
    function Laptop(br, prs, sc, ml, prc) {
        this.brand = br;
        this.processor = prs;
        this.screenSize = sc;
        this.isLatestModel = ml;
        this.price = prc;
    }
    Laptop.prototype.configuration = function () {
        console.log("".concat(this.isLatestModel ? "Latest" : "Older", " Model of ").concat(this.brand, " Laptop! Processor: ").concat(this.processor, ", Screen Size: ").concat(this.screenSize, " inc, Price: ").concat(this.price, " USD."));
    };
    return Laptop;
}());
exports.Laptop = Laptop;
