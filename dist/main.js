"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var calculoImpuestoSimona = new _impuestos["default"](3400, 1300);
var calculoImpuestoBorja = new _impuestos["default"](45600, 12500);
var cliente1 = new _cliente["default"]('Simona', calculoImpuestoSimona);
var cliente2 = new _cliente["default"]('Borja', calculoImpuestoBorja);
console.log(cliente1.calcularImpuesto());
console.log(cliente2.calcularImpuesto());
console.log("".concat(cliente1.nombre, " su impuesto anual es: $ ").concat(cliente1.calcularImpuesto()));
console.log(cliente2);