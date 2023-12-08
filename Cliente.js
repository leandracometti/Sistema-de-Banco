export class Cliente {
  constructor(nome, cpf, senha) {
    this._nome = nome;
    this._cpf = cpf;
    this._senha = senha;
  }

  //acessores
  get cpf() {
    return this._cpf;
  }

  //chave para autenticação
  autenticar() {
    return true;
  }
}
