import * as readlinesync from "readline-sync";
import { Produtos } from "./Produtos";

export class Camisetas extends Produtos{

    private _tamanhoCamiseta: string;


    constructor (id: number, tipo: number, modelo: string, marca: string, estoque: number, preco: number, tamanhoCamiseta: string){
        super(id, tipo, modelo, marca, estoque, preco)
        this._tamanhoCamiseta = tamanhoCamiseta;
   
    }

    public get tamanhoCamiseta(){
        return this._tamanhoCamiseta
    }
    public set tamanhoCamiseta(tamanhoCamiseta: string){
        this._tamanhoCamiseta = tamanhoCamiseta;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Tipo de calçado: " + this._tamanhoCamiseta +"\n\n")
    }

    
}