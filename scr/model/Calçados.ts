import * as readlinesync from "readline-sync";
import { Produtos } from "./Produtos";

export class Calçados extends Produtos{

    private _tamanhoCalcados: number;

    constructor (id: number, tipo: number, modelo: string, marca: string, estoque: number, preco: number, tamanhoCalcados: number){
       super(id, tipo, modelo, marca, estoque, preco)
       this._tamanhoCalcados = tamanhoCalcados;

    }

    public get tamanhoCalcados(){
        return this._tamanhoCalcados
    }
    public set tamanhoCalcados(tamanhoCalcados: number){
        this._tamanhoCalcados = tamanhoCalcados
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Tipo de calçado: " + this._tamanhoCalcados +"\n\n")
    }
}