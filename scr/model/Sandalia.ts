import { Produtos } from "./Produtos";

export class Sandalia extends Produtos{

    private _Salto:boolean;

    constructor (id: number, modelo: string, marca: string, tamanho: number, estoque: number, preco: number, salto: boolean){
        super(id, modelo, marca, tamanho, estoque, preco);
       this._Salto = salto;
    }

    public get salto(){
        return this._Salto
    }
    public set salto(salto: boolean){
        this._Salto
    }
    
}