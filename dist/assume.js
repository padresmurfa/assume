'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* eslint-disable sort-imports */


var _assumptionFailed = require('./assumptionFailed');

var _assumptionFailed2 = _interopRequireDefault(_assumptionFailed);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _normalizeClassNames = require('./normalizeClassNames');

var _normalizeClassNames2 = _interopRequireDefault(_normalizeClassNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-enable sort-imports */

var tString = _typeof("");
var tUndefined = typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined);

function isUndefinedOrString(value) {
    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

    return type === tUndefined || type === tString;
}

function clarify(value) {
    if (value === null) {
        return "<null>";
    } else if (value === undefined) {
        return "<undefined>";
    } else if (_lodash2.default.isArray(value)) {
        return "<array>";
    } else if (_lodash2.default.isDate(value)) {
        return "<date>";
    } else if (_lodash2.default.isObject(value)) {
        return "<object>";
    } else if (_lodash2.default.isString(value)) {
        return '"' + value + '"';
    }

    return value;
}

var Assume = function () {
    function Assume(factory) {
        _classCallCheck(this, Assume);

        if (factory === undefined) {
            this.factory = function (msg) {
                return new _assumptionFailed2.default(msg);
            };
        } else {
            this.factory = factory;
        }
    }

    _createClass(Assume, [{
        key: 'fail',
        value: function fail(message) {
            throw this.factory(message || 'Assumption failed');
        }
    }, {
        key: 'areEqual',
        value: function areEqual(expected, actual, message) {
            if (!_lodash2.default.isEqual(expected, actual)) {
                var ce = clarify(expected);
                var ca = clarify(actual);

                this.fail(message || 'Expected values to be equal (' + ce + ',' + ca + ')');
            }
        }
    }, {
        key: 'isTrue',
        value: function isTrue(actual, message) {
            if (actual !== true) {
                var ca = clarify(actual);

                this.fail(message || 'Expected value (' + ca + ') to be true');
            }
        }
    }, {
        key: 'isFalse',
        value: function isFalse(actual, message) {
            if (actual !== false) {
                var ca = clarify(actual);

                this.fail(message || 'Expected value (' + ca + ') to be false');
            }
        }
    }, {
        key: 'isError',
        value: function isError(value, message) {
            if (value instanceof Error) {
                return;
            }

            // we're also fine with duck-typing:
            var isMessageLegit = isUndefinedOrString(value.message);
            var isStackLegit = isUndefinedOrString(value.stack);
            var isErrorLegit = isMessageLegit && isStackLegit;

            if (isErrorLegit) {
                return;
            }

            var ca = clarify(value);

            this.fail(message || 'Expected values to be an Error (' + ca + ')');
        }
    }, {
        key: 'isInstanceOf',
        value: function isInstanceOf(value, classNames, message) {
            var normalized = (0, _normalizeClassNames2.default)(classNames);

            if (!_lodash2.default.some(normalized, function (className) {
                return className === value.constructor.name;
            })) {
                if ((0, _normalizeClassNames.isSingular)(normalized)) {
                    this.fail(message || 'Expected value to be an instance of ' + _lodash2.default.first(normalized));
                } else {
                    this.fail(message || 'Expected value to be an instance of one of the following: ' + normalized);
                }
            }
        }
    }, {
        key: 'isNull',
        value: function isNull(value, message) {
            if (value !== null) {
                var cv = clarify(value);

                this.fail(message || 'Expected value (' + cv + ') to be null');
            }
        }
    }, {
        key: 'isNotNull',
        value: function isNotNull(value, message) {
            if (value === null) {
                this.fail(message || 'Expected value to not be null');
            }
        }
    }, {
        key: 'isDefined',
        value: function isDefined(value, message) {
            if (_lodash2.default.isUndefined(value)) {
                this.fail(message || 'Expected value to be defined');
            }
        }
    }, {
        key: 'isUndefined',
        value: function isUndefined(value, message) {
            if (!_lodash2.default.isUndefined(value)) {
                var cv = clarify(value);

                this.fail(message || 'Expected value (' + cv + ') to be undefined');
            }
        }
    }, {
        key: 'isEmpty',
        value: function isEmpty(value, message) {
            if (!_lodash2.default.isEmpty(value)) {
                var cv = clarify(value);

                this.fail(message || 'Expected value (' + cv + ') to be empty');
            }
        }
    }, {
        key: 'isNotEmpty',
        value: function isNotEmpty(value, message) {
            if (_lodash2.default.isEmpty(value)) {
                var cv = clarify(value);

                this.fail(message || 'Expected value (' + cv + ') to not be empty');
            }
        }
    }, {
        key: 'isString',
        value: function isString(value, message) {
            if (!_lodash2.default.isString(value)) {
                var cv = clarify(value);

                this.fail(message || 'Expected value (' + cv + ') to be a string');
            }
        }
    }, {
        key: 'isImmutable',
        value: function isImmutable(value, message) {
            if (_lodash2.default.isString(value) || _lodash2.default.isNumber(value) || _lodash2.default.isBoolean(value)) {
                return;
            }

            var cv = clarify(value);

            this.fail(message || 'Expected value (' + cv + ') to be immutable');
        }
    }, {
        key: 'isInteger',
        value: function isInteger(value, message) {
            if (!_lodash2.default.isInteger(value)) {
                var cv = clarify(value);

                if (_lodash2.default.isString(value)) {
                    var p = parseInt(value, 10);

                    if (p !== undefined && p.toString() === value) {
                        cv = '"' + value + '"';
                    }
                }

                this.fail(message || 'Expected value (' + cv + ') to be an integer');
            }
        }
    }, {
        key: 'isBoolean',
        value: function isBoolean(value, message) {
            if (!_lodash2.default.isBoolean(value)) {
                var cv = clarify(value);

                if (_lodash2.default.isString(value) && (value === "true" || value === "false")) {
                    cv = '"' + value + '"';
                }

                this.fail(message || 'Expected value (' + cv + ') to be a boolean');
            }
        }
    }, {
        key: 'isArray',
        value: function isArray(value, message) {
            if (!_lodash2.default.isArray(value)) {
                var cv = clarify(value);

                if (_lodash2.default.isString(value) && value.startsWith("[") && value.endsWith("]")) {
                    cv = '"' + value + '"';
                }

                this.fail(message || 'Expected value (' + cv + ') to be an array');
            }
        }
    }, {
        key: 'isObject',
        value: function isObject(value, message) {
            if (!_lodash2.default.isObject(value)) {
                var cv = clarify(value);

                if (_lodash2.default.isString(value) && value.startsWith("{") && value.endsWith("}")) {
                    cv = '"' + value + '"';
                }

                this.fail(message || 'Expected value (' + cv + ') to be an object');
            }
        }
    }, {
        key: 'isDate',
        value: function isDate(value, message) {
            if (!_lodash2.default.isDate(value)) {
                var cv = clarify(value);

                this.fail(message || 'Expected value (' + cv + ') to be a date');
            }
        }
    }, {
        key: 'isIsoDate',
        value: function isIsoDate(value, message) {
            if (!_lodash2.default.isString(value)) {
                var cv = clarify(value);

                this.fail(message || 'Expected value (' + cv + ') to be a string containing an ISO-8601 date');
            }
            if (!(0, _moment2.default)(value, _moment2.default.ISO_8601).isValid()) {
                this.fail(message || 'Expected value (' + value + ') to be a string containing a valid ISO-8601 date');
            }
        }
    }]);

    return Assume;
}();

exports.default = Assume;