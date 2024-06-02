import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import { TipoDocumento } from "../../enumeracoes/TipoDocumento";
import MenuEditarClienteDependente from "../../menus/menuEditarClienteDependente";
import MenuEditarClienteTitular from "../../menus/menuEditarClienteTitular";
import Cliente from "../../modelos/cliente";
import CadastrarDocumentosCliente from "../cadastro/cadastroDocumentosCliente";
import CadastroTelefoneTitular from "../cadastro/cadastroTelefoneTitular";
import AtualizarDataNascimento from "./atualizacaoDataNascimento";
import AtualizarDocumento from "./atualizacaoDocumentos";
import AtualizarEndereco from "./atualizacaoEndereco";
import AtualizarNome from "./atualizacaoNome";
import AtualizarNomeSocial from "./atualizacaoNomeSocial";
import AtualizarTelefone from "./atualizacaoTelefone";

export default class AtualizarClienteDependente extends Processo {
    private clientes: Cliente[];

    constructor() {
        super();
        this.menu = new MenuEditarClienteDependente();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear();
        let cpfDependente = this.entrada.receberTexto("Digite o CPF do dependente para editar:");

        let clienteDependente = this.clientes.find(cliente =>
            cliente.Documentos.some(dadosCPF =>
                dadosCPF.Numero === cpfDependente && dadosCPF.Tipo === TipoDocumento.CPF
            )
        );

        if (!clienteDependente) {
            console.log("Cliente dependente não encontrado.");
            return;
        }

        let execucao = true;

        while (execucao) {
            this.menu.mostrar();
            let opcao = this.entrada.receberNumero("Escolha uma opção:");

            switch (opcao) {
                case 1:
                    this.processo = new AtualizarNome(clienteDependente);
                    this.processo.processar();
                    break;
                case 2:
                    this.processo = new AtualizarNomeSocial(clienteDependente);
                    this.processo.processar();
                    break;
                case 3:
                    this.processo = new AtualizarDataNascimento(clienteDependente);
                    this.processo.processar();
                    break;
                case 4:
                    this.processo = new AtualizarDocumento(clienteDependente);
                    this.processo.processar();
                    break;
                case 5:
                    this.processo = new CadastrarDocumentosCliente(clienteDependente);
                    this.processo.processar();
                    break;
                case 0:
                    execucao = false;
                    console.log("Edição finalizada.");
                    break;
                default:
                    console.log("Opção não entendida. Tente novamente.");
            }
        }
    }
}
