import { publicDecrypt } from "crypto";
import { Produtos } from "../model/Produtos";
import { ProdutoRepository } from "../repository/ProdutosRepository";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array<Produtos> = new Array<Produtos>();
    id: number = 0;

    cadastraProdutos(produtos: Produtos): void {
        this.listaProdutos.push(produtos);
        console.log("\nDigite o codigo do produto: " + produtos.id)
    }
    listarProdutos(): void {
        for(let produtos of this.listaProdutos){
            produtos.visualizar();
        };
    }
    buscarProdutoPorID(id: number): void {
        let buscarProduto = this.buscarNoArray(id);
         
      if (buscarProduto != null){
        buscarProduto.visualizar();
      }else{
        console.log( "\nA conta numero: " + id + " não foi encontrada!");
      }
    
    }
    atualizar(produtos: Produtos): void {
        let buscarProduto =this.buscarNoArray(produtos.id);
       
        if (buscarProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscarProduto)] = produtos;
            console.log("\nA conta numero: " + produtos.id + " foi atualizada com sucesso! ");
        }else {
            console.log("\nA conta numero: " + produtos.id + " não fou encontrada!");
        }
    }
    deletar(id: number): void {
    let buscarProduto = this.buscarNoArray(id);
        if (buscarProduto != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscarProduto),1);
            console.log("\nO produto de codigo: " + id + " foi apagada com sucesso!");
        }else {
            console.log("\nO produto de codigo " + id + " não fou encontrada!");
        }
    }

    public gerarId(): number {
        return ++ this.id;
    }

    public buscarNoArray(id: number): Produtos | undefined {
        
        for (let produto of this.listaProdutos){
            if (produto.id === id)
            return produto;
        }
    }
}