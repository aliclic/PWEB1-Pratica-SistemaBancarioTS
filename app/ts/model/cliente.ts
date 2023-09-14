class Cliente {

    private nome: string;
    private cpf: string;
    private conta: Conta;

    constructor(nome: string, cpf: string) {
        this.nome = nome;
        this.cpf = cpf;
    }

    get _nome() {
        return this.nome;
    }

    set _nome(novoNome: string) {
        this.nome = novoNome;
    }

    get _cpf() {
        return this.cpf;
    }

    set _cpf(novoCpf: string) {
        this.cpf = novoCpf;
    }

    get _conta() {
        return this.conta;
    }

    set _conta(novaConta: Conta) {
        this.conta = novaConta;
    }

    toString(): string {
        return `Nome: ${this.nome} 
        - CPF: ${this.cpf}`;
    }
}