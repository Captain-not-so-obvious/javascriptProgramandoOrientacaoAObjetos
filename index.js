import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Fillipe";
cliente1.cpf = 12312312312;

cliente2.nome = "Alice";
cliente2.cpf = 12312312313;

const contaCorrenteFillipe = new ContaCorrente();
contaCorrenteFillipe.agencia = 1001;
contaCorrenteFillipe.cliente = cliente1
contaCorrenteFillipe.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 1001;

contaCorrenteFillipe.transferir(200, conta2);

console.log(conta2);
