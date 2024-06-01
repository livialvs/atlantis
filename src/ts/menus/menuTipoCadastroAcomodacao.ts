import Menu from "../interfaces/menu"

export default class MenuTipoCadastroAcomodacao implements Menu{
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de acomodação desejada? `)
        console.log(`----------------------`)
        console.log(`| 1 - Casal Simples`)
        console.log(`| 2 - Família Simples`)
        console.log(`| 3 - Família Mais`)
        console.log(`| 4 - Família Super`)
        console.log(`| 5 - Solteiro Simples`)
        console.log(`| 6 - Solteiro Mais`)
        console.log(`----------------------`)
    }
}