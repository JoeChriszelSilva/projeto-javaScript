import { Produtos } from "./Produtos";

export class Tenis extends Produtos{

    private _esportivo:boolean;
    private _casual: boolean;

    constructor (id: number, modelo: string, marca: string, tamanho: number, estoque: number, preco: number, esportivo: boolean, casual: boolean){
        super(id, modelo, marca, tamanho, estoque, preco);
       this._esportivo = esportivo;
       this._casual = casual
    }

    public get esportivo(){
        return this._esportivo
    }
    public set esportivo(esportivo: boolean){
        this._esportivo
    }

    
    public get casual(){
        return this._casual
    }
    public set casual(casual: boolean){
        this._casual
    }




}