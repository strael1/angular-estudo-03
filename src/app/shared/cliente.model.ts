export class ClienteModel {
    public nome: string;
    public email: string;
    public telefone: string;
    public idade: number;
    
    constructor(nome: string,email: string,telefone: string, idade: number){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.idade = idade;
    }
}