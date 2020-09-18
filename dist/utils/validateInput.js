"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.validateInput = void 0;

var validateInput = function validateInput(fn) {
  return function () {
    // TODO: Implementation missing
    return fn.apply(void 0, arguments);
  };
};

exports.validateInput = validateInput;
var _default = validateInput;
exports["default"] = _default;