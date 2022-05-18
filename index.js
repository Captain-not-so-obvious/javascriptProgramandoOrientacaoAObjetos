import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./Funcionario/SistemaAutenticacao.js";

const diretor = new Diretor ("Fillipe", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente ("Jupy", 5000, 12345678901);
gerente.cadastrarSenha("123");

const cliente = new Cliente ("Minnie", 12345678902, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);
