import * as readlinesync from "readline-sync";
import { Produtos } from "./Produtos";

export class Tenis extends Produtos{

    private _tipoDotenis: string;

    constructor (id: number, tipo: number, modelo: string, marca: string, tamanho: number, estoque: number, preco: number, tipoDotenis: string){
        super(id, tipo, modelo, marca, tamanho, estoque, preco);
       this._tipoDotenis = tipoDotenis;

    }

    public get tipoDotenis(){
        return this._tipoDotenis
    }
    public set tipoDotenis(tipoDotenis: string){
        this._tipoDotenis = tipoDotenis
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Tipo de calçado: " + this._tipoDotenis +"\n\n")
    }
}