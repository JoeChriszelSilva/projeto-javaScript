import { Produtos } from "../model/Produtos";

export interface ProdutoRepository {

    cadastraProdutos( produtos: Produtos): void;
    listarProdutos(): void;
    buscarProdutoPorID(id: number): void;
    atualizar(produtos: Produtos): void;
    deletar(id: number): void;

    
}