import readlinesync = require("readline-sync");

export abstract class Produtos{
    private _id: number;
    private _tipo: number;
    private _modelo: string;
    private _marca: string;
    private _estoque: number;
    private _preco: number;

    constructor (id: number, tipo: number, modelo: string, marca: string, estoque: number, preco: number){
        this._id = id;
        this._tipo = tipo
        this._modelo = modelo;
        this._marca = marca;
        this._estoque = estoque;
        this._preco = preco;
    }
    
    public get id () { 
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

        public get tipo () { 
        return this._tipo;
    }

    public set tipo(tipo: number) {
        this._tipo = tipo;
    }

    public get modelo() { 
        return this._modelo
    }
    public set modelo(modelo: string) {
        this._modelo = modelo;
    }

    public get marca() { 
        return this._marca
    }
    public set marca(marca: string) {
        this._marca = marca;
    }

    public get estoque() { 
        return this._estoque
    }
    public set estoque(estoque: number) {
        this._estoque = estoque;
    }

    public get preco() { 
        return this._preco
    }
    public set preco(preco: number) {
        this._preco = preco;
    }
 public visualizar(): void {

        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Tenis";
                break;
            case 2:
                tipo = "Sandalia";
                break;
        }

      

        console.log("\n\n*****************************************************");
        console.log("                       Produto                       ");
        console.log("*****************************************************");
        console.log("         Modelo: " + this._modelo);
        console.log("         Marca: " + this._marca);
        console.log("         Estoque: " + this._estoque);
        console.log("         Preço: " + new Intl.NumberFormat('pt-BR', {
                             style: 'currency',
                            currency: 'BRL',}).format(this._preco));
        console.log("\n\n*****************************************************");

        

    }
}
