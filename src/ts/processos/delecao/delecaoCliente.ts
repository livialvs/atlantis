import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import { TipoDocumento } from "../../enumeracoes/TipoDocumento";
import Cliente from "../../modelos/cliente";

export default class DeletarCliente extends Processo {
  private clientes: Cliente[];

  constructor() {
    super();
    this.clientes = Armazem.InstanciaUnica.Clientes;
    this.execucao = true;
  }

  processar(): void {
    if (this.clientes.length === 0) {
      console.log("Não há clientes cadastrados.");
      return;
    }

    const numeroCpf = this.entrada.receberTexto("Digite o número do CPF a ser excluído (ou 0 para cancelar):");

    if (numeroCpf.toLowerCase() === "0") {
      console.log("Operação cancelada.");
      return;
    }

    let clienteEncontrado: Cliente | null = null;

    for (const cliente of this.clientes) {
      for (const documento of cliente.Documentos) {
        if (documento.Tipo === TipoDocumento.CPF && documento.Numero === numeroCpf) {
          clienteEncontrado = cliente;
          break;
        }
      }
      if (clienteEncontrado) break;
    }

    if (clienteEncontrado) {
      const confirmacao = this.entrada.receberTexto(`Você deseja mesmo deletar o cliente ${clienteEncontrado.Nome}? (s/n):`);
      if (confirmacao.toLowerCase() === "s") {
        const index = this.clientes.indexOf(clienteEncontrado);
        if (index > -1) {
          this.clientes.splice(index, 1);
          console.log(`Cliente ${clienteEncontrado.Nome} excluído com sucesso!`);
        }
      } else {
        console.log("Operação cancelada.");
      }
    } else {
      console.log("Cliente não encontrado.");
    }
  }
}
