import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Fillipe", 12312312312);
const cliente2 = new Cliente("Alice", 12312312313);

let numeroDeContas = 0;

const contaCorrenteFillipe = new ContaCorrente(1001, cliente1);
contaCorrenteFillipe.depositar(500);

const conta2 = new ContaCorrente(1001, cliente2);
contaCorrenteFillipe.transferir(200, conta2);

console.log(contaCorrenteFillipe);
