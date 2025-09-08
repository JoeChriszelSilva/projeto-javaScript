import readlinesync = require("readline-sync");
import { Produtos } from "./scr/model/Produtos";


export function main() {

    let opcao: number;

    while(true) {

    console.log("**************************************************");
    console.log("               kINGCHRISZ SAPATOS                 ");
    console.log("**************************************************");
    console.log("                                                  ");
    console.log("           1 - Cadastrar Sapato                   ");
    console.log("           2 - Listar todos os Sapatos            ");
    console.log("           3 - Buscar Sapato por ID               ");
    console.log("           4 - Atualizar Sapato                   ");
    console.log("           5 - Deletar Sapato                     ");
    console.log("           0 - Sair                               ");
    console.log("                                                  ");
    console.log("**************************************************");
    
    console.log("Escolha a Opção Desejada: ")
    opcao = readlinesync.questionInt("");

    if (opcao == 0){
        console.log("\n KINGCHRISZ SAPATOS - OS SAPATOS QUE TE VESTE!");
        process.exit(0)
    }

    switch (opcao){
        case 1:
            console.log("\n\nCadastrar Sapato\n\n");
            keyPress()
            break;
        case 2:
            console.log("\n\n Listar todos os Sapatos\n\n");
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