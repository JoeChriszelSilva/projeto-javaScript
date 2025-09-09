import { Produtos } from "../model/Produtos";
import { ProdutoRepository } from "../repository/ProdutosRepository";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array<Produtos> = new Array<Produtos>();
    id: number = 0;

    cadastraProdutos(produtos: Produtos): void {
        throw new Error("Method not implemented.");
    }
    listarProdutos(): void {
        for(let Produtos of this.listaProdutos){
            Produtos.visualizar();
        };
    }
    buscarProdutoPorID(id: number): void {
        throw new Error("Method not implemented.");
    }
    atualizar(produtos: Produtos): void {
        throw new Error("Method not implemented.");
    }
    deletar(id: number): void {
        throw new Error("Method not implemented.");
    }

}