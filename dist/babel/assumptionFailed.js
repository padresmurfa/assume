"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AssumptionFailed = function AssumptionFailed(message) {
    _classCallCheck(this, AssumptionFailed);

    try {
        throw new Error(message);
    } catch (e) {
        this.message = message;
        this.stack = e.stack;
    }
};

exports.default = AssumptionFailed;