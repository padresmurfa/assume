'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assume = require('./assume');

var _assume2 = _interopRequireDefault(_assume);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var singleton = new _assume2.default();

exports.default = singleton;