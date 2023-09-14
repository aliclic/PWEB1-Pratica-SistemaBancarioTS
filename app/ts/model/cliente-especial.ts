class ClienteEspecial extends Cliente {

    private dependentes: Array<Cliente>;

    constructor(nome: string, cpf: string) {
        super(nome, cpf);
        this.dependentes = new Array<Cliente>();
    }

    get _dependentes() {
        return this.dependentes;
    }

    set _dependentes(novosDependentes: Array<Cliente>) {
        this.dependentes = novosDependentes;
    }
}