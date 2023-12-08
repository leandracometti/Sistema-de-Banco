//classe abstrata

export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    //gera um erro ao tentar instanciar a classe Conta
    if (this.constructor == Conta) {
      throw new Error(
        "Você não pode instanciar uma classe Conta pois esta é abstrata!"
      );
    }
    //propriedades protegidas
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  //acessores
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) this._cliente = novoValor;
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  //métodos
  depositar(valor) {
    if (valor <= 0) return;
    this._saldo += valor;
  }

  _sacar(valor, taxa) {
    const valorSacado = valor * taxa;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
    return 0;
  }

  //método abstrato
  sacar(valor) {
    throw new Error(
      "O método sacar de Conta é abstrato e deve ser sobrescrito!"
    );
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
