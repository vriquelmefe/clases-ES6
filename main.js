import Cliente from './src/cliente.js';
import Impuestos from './src/impuestos.js';

const calculoImpuestoSimona = new Impuestos(3400, 1300);
const calculoImpuestoBorja = new Impuestos(45600, 12500);
const cliente1 = new Cliente('Simona', calculoImpuestoSimona);
const cliente2 = new Cliente('Borja', calculoImpuestoBorja);

console.log(cliente1.calcularImpuesto());
console.log(cliente2.calcularImpuesto());
console.log(`${cliente1.nombre} su impuesto anual es: $ ${cliente1.calcularImpuesto()}`);
console.log(cliente2)