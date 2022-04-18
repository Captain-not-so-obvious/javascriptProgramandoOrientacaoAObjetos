class cliente{
    nome;
    cpf;
}

class contaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0 ) {
            return;
        }
        this._saldo += valor;
        }
}

const cliente1 = new cliente();
const cliente2 = new cliente();

cliente1.nome = "Fillipe";
cliente1.cpf = 12312312312;

cliente2.nome = "Alice";
cliente2.cpf = 12312312313;

const contaCorrenteFillipe = new contaCorrente();
contaCorrenteFillipe.agencia = 0001;

 contaCorrenteFillipe.depositar(100);
 contaCorrenteFillipe.depositar(100);
 contaCorrenteFillipe.depositar(100);

 const valorSacado = contaCorrenteFillipe.sacar(50);
 console.log(valorSacado);
 console.log(contaCorrenteFillipe);
