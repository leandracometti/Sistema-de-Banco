import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

//criando clientes
const cliente1 = new Cliente("Leandra", 11122233309, "112233");

//criando contas corrente
const contaCorrente1 = new ContaCorrente(cliente1, 1001);

//criando contas poupança
const contaPoupanca1 = new ContaPoupanca(50, cliente1, 1001);

//criando contas salário
const contaSalario1 = new ContaSalario(cliente1);

//criando funcionarios e senhas
const diretor = new Diretor("Diretor", 1000, 99988877711);
diretor.cadastrarSenha("123456789");
SistemaAutenticacao.login(diretor, "123456789");

const gerente = new Gerente("Gerente", 4000, 22255588800);
gerente.cadastrarSenha("987654321");

//testes
console.log(cliente1);
console.log(contaCorrente1);
