"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = normalizeClassNames;

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function normalizeClassNames(classNames) {
    if (!_lodash2.default.isString(classNames)) {
        throw new Error("Class names should be specified as a delimited string");
    }

    var normalizedClassNames = classNames.split(/[;:,\.\s]/);
    if (normalizedClassNames.length > 1) {
        return normalizedClassNames;
    }

    return [classNames];
}