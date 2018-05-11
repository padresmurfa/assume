'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.normalizeClassNames = exports.Assume = exports.AssumptionFailed = undefined;

var _assume = require('./assume');

var _assume2 = _interopRequireDefault(_assume);

var _assumptionFailed = require('./assumptionFailed');

var _assumptionFailed2 = _interopRequireDefault(_assumptionFailed);

var _normalizeClassNames = require('./normalizeClassNames');

var _normalizeClassNames2 = _interopRequireDefault(_normalizeClassNames);

var _singleton = require('./singleton');

var _singleton2 = _interopRequireDefault(_singleton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _singleton2.default;
exports.AssumptionFailed = _assumptionFailed2.default;
exports.Assume = _assume2.default;
exports.normalizeClassNames = _normalizeClassNames2.default;