import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Fillipe", 12312312312);


const contaCorrenteFillipe = new ContaCorrente(cliente1, 1001);
contaCorrenteFillipe.depositar(500);
contaCorrenteFillipe.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);

console.log(contaPoupanca);
console.log(contaCorrenteFillipe);
