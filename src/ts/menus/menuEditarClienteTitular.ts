import Menu from "../interfaces/menu"

export default class MenuEditarClienteTitular implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| O que procura para editar? `)
        console.log(`----------------------`)
        console.log(`| 1 - Nome`)
        console.log(`| 2 - Nome Social`)
        console.log(`| 3 - Data de Nascimento`)
        console.log(`| 4 - Endereço`)
        console.log(`| 5 - Documentos`)
        console.log(`| 6 - Telefones`)
        console.log(`| 7 - Adicionar documentos`)
        console.log(`| 8 - Adicionar telefones`)
        console.log(`| 0 - Sair`)
        console.log(`----------------------`)
    }
}