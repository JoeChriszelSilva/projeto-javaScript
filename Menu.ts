import * as readlinesync from "readline-sync";
import { Produtos } from "./scr/model/Produtos";
import { Tenis } from "./scr/model/Tenis";
import { Sandalia } from "./scr/model/Sandalia";
import { ProdutoController } from "./scr/Controller/ProdutoControle";   



export function main() {

    let produtos: ProdutoController = new ProdutoController();

    let opcao: number;
    
    const tenis: Tenis = new Tenis(1, 1, "AIR FORCE", "NIKE", 30,30,250, "esportivo");
    tenis.visualizar()
    const sandalia: Sandalia = new Sandalia(2, 3, "MELISSA", "SEI LA", 35, 15,130, "esportivo");
    sandalia.visualizar()
    

    while(true) {

    console.log("**************************************************");
    console.log("               kINGCHRISZ IMPORTS                 ");
    console.log("**************************************************");
    console.log("                                                  ");
    console.log("           1 - Cadastrar Produto                   ");
    console.log("           2 - Listar Produtos            ");
    console.log("           3 - Buscar Produto por ID               ");
    console.log("           4 - Atualizar Produto                   ");
    console.log("           5 - Deletar Produto                    ");
    console.log("           0 - Sair                               ");
    console.log("                                                  ");
    console.log("**************************************************");
    
    console.log("Escolha a Opção Desejada: ")
    opcao = readlinesync.questionInt("");

    if (opcao == 0){
        console.log("\n KINGCHRISZ IMPORTS - AS MELHORES MARCAS PARA VOCÊ!");
        process.exit(0)
    }

    switch (opcao){
        case 1:
            console.log("\n\nCadastrar Sapato\n\n");
            keyPress()
            break;
        case 2:
            console.log("\n\n Listar Produtos\n\n");

            Produtos.visualizar();

            keyPress()
            break;
        case 3:
            console.log("\n\nBuscar Sapato por ID\n\n");
            keyPress()
            break;
        case 4:
            console.log(" \n\nAtualizar Sapato\n\n");
            keyPress()
            break;
        case 5:
            console.log("\n\nDeletar Sapato\n\n");
            keyPress()
            break;
        default:
            console.log("\n\nOpção inválida! Por favor, tente novamente.\n\n");
            keyPress()
            break;
        }

    }

}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();