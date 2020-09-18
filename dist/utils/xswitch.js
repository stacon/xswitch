"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.xswitch = void 0;

var _validateInput = _interopRequireDefault(require("./validateInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var xswitch = function xswitch() {
  for (var _len = arguments.length, cases = new Array(_len), _key = 0; _key < _len; _key++) {
    cases[_key] = arguments[_key];
  }

  return function () {
    var _cases$find;

    for (var _len2 = arguments.length, switchParams = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      switchParams[_key2] = arguments[_key2];
    }

    return (_cases$find = cases.find(function (_ref) {
      var xcase = _ref.xcase;
      return xcase.apply(void 0, switchParams);
    })) === null || _cases$find === void 0 ? void 0 : _cases$find["return"].apply(_cases$find, switchParams);
  };
};

exports.xswitch = xswitch;

var _default = (0, _validateInput["default"])(xswitch);

exports["default"] = _default;