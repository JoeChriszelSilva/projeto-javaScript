import * as readlinesync from "readline-sync";
import { Produtos } from "./Produtos";

export class Sandalia extends Produtos{

    private _tipoDaSandalia: string;


    constructor (id: number, tipo: number, modelo: string, marca: string, tamanho: number, estoque: number, preco: number, tipoDaSandalia: string){
        super(id, tipo, modelo, marca, tamanho, estoque, preco);
        this._tipoDaSandalia = tipoDaSandalia;
   
    }

    public get tipoDaSandalia(){
        return this._tipoDaSandalia
    }
    public set tipoDaSandalia(tipoDaSandalia: string){
        this._tipoDaSandalia = tipoDaSandalia;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Tipo de calçado: " + this._tipoDaSandalia +"\n\n")
    }

    
}