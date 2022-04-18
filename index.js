class cliente{
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new cliente();
const cliente2 = new cliente();

cliente1.nome = "Fillipe";
cliente1.cpf = 12312312312;
cliente1.agencia = 0001;
cliente1.saldo = 0;

cliente2.nome = "Alice";
cliente2.cpf = 12312312313;
cliente2.agencia = 0001;
cliente2.saldo = 0;

console.log(cliente1, cliente2);
