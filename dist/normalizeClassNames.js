"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isSingular = isSingular;
exports.isPlural = isPlural;
exports.default = normalizeClassNames;

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var one = 1;

function isSingular(collection) {
    return collection.length === one;
}

function isPlural(collection) {
    return collection.length > one;
}

function normalizeClassNames(classNames) {
    if (!_lodash2.default.isString(classNames)) {
        throw new Error("Class names should be specified as a delimited string");
    }

    var normalizedClassNames = classNames.split(/[;:,.\s]/);

    if (isSingular(normalizeClassNames)) {
        return [classNames];
    } else if (isPlural(normalizedClassNames)) {
        return normalizedClassNames;
    }

    return [];
}