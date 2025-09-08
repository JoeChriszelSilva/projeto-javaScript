import readlinesync = require("readline-sync");

export class Produtos{
    private _id: number;
    private _modelo: string;
    private _marca: string;
    private _tamanho: number;
    private _estoque: number;
    private _preco: number;

    constructor (id: number, modelo: string, marca: string, tamanho: number, estoque: number, preco: number){
        this._id = id;
        this._modelo = modelo;
        this._marca = marca;
        this._tamanho = tamanho;
        this._estoque = estoque;
        this._preco = preco;
    }
    
    public get id () { 
        return this._id;
    }

    public set id(id: number) {
        this._id;
    }

    public get modelo() { 
        return this._modelo
    }
    public set modelo(modelo: string) {
        this._modelo;
    }

    public get marca() { 
        return this._marca
    }
    public set marca(marca: string) {
        this._marca
    }

    public get tamanho() { 
        return this._tamanho
    }
    public set tamanho(tamanho: number) {
        this._tamanho
    }
    
    public get estoque() { 
        return this._estoque
    }
    public set estoque(estoque: number) {
        this._estoque
    }

    public get preco() { 
        return this._preco
    }
    public set preco(preco: number) {
        this._preco
    }

    


}