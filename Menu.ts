import * as readlinesync from "readline-sync";
import { Produtos } from "./scr/model/Produtos";
import { Calçados } from "./scr/model/Calçados";
import { Camisetas } from "./scr/model/Camisetas";
import { ProdutoController } from "./scr/Controller/ProdutoControle";   



export function main() {

    let produtos: ProdutoController = new ProdutoController();

    let opcao, id, tipo, modelo, marca, estoque, preco;
    const tiposProdutos = ["Calçados" , "Camisetas"];
    
    const tenis: Calçados = new Calçados(1, 1, "AIR FORCE", "NIKE", 10, 130, 38);
    tenis.visualizar()
    const sandalia: Camisetas = new Camisetas(2, 3, "Camiseta Longline", "Nike", 10, 60, "M");
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
            console.log("Digite o codigo do produto: ");
            id = readlinesync.questionInt("");

            console.log("Digite o Modelo do produto: ");
            modelo = readlinesync.question("");

            console.log("Digite a marca do produto: ");
            marca = readlinesync.question("");
        
            console.log("Digite a quantidade em estoque: ");
            estoque = readlinesync.questionInt("");

            console.log("Digite o valor: ");
            preco = readlinesync.questionFloat("");

            console.log("Qual o tipo do produto: ");
            tipo = readlinesync.keyInSelect(tiposProdutos, "", {cancel: false}) + 1;

            keyPress()
            break;
        case 2:
            console.log("\n\n Listar Produtos\n\n");
            produtos.listarProdutos();
          

            keyPress()
            break;
        case 3:
            console.log("\n\nBuscar  por ID\n\n");
             console.log("Digite o codigo do produto: ")
                    id = readlinesync.questionInt("");
                    produtos.buscarProdutoPorID(id);
            keyPress()
            break;
        case 4:
            console.log(" \n\nAtualizar Produto\n\n");
             console.log("Digite o número da Conta: ");
                    id = readlinesync.questionInt("")

                    let produto = produtos.buscarNoArray(id);

                    if (produto != null) {
                        console.log("Digite o codigo do produto: ");
                        id = readlinesync.questionInt("");

                        console.log("Digite o Modelo do produto: ");
                        modelo = readlinesync.question("");

                        tipo = produto.tipo;
                        
                        console.log("Digite o valor: ");
                        preco = readlinesync.questionFloat("");
                    }  

            keyPress()
            break;
        case 5:
            console.log("\n\nDeletar produto\n\n");
                           
            console.log ("Digite o  numero da conta: ")
            id = readlinesync.questionInt("");
            produtos.deletar(id);

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