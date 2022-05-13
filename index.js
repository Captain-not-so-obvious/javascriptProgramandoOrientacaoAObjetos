import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import {Conta} from "./Conta.js";

const cliente1 = new Cliente("Fillipe", 12312312312);


const contaCorrenteFillipe = new Conta(0, cliente1, 1001);
contaCorrenteFillipe.depositar(500);
contaCorrenteFillipe.sacar(100);

const contaPoupanca = new Conta(50, cliente1, 1001);

console.log(contaPoupanca);
console.log(contaCorrenteFillipe);
