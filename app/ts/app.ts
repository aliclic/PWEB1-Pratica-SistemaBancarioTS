let clienteController = new ClienteController();
const clientes = new Clientes();

clienteController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

const cliente1 = new Cliente('Alic', '111');
const cliente2 = new Cliente('Victor', '222');
const cliente3 = new Cliente('Andrade', '333');

cliente1._conta = c1;
cliente2._conta = p1;
cliente3._conta = cb1;

clientes.inserir(cliente1);
clientes.inserir(cliente2);
clientes.inserir(cliente3);

console.log();
clientes.listar().forEach(cliente => console.log(cliente));

console.log('Pesquisar cliente 3:')
console.log(clientes.pesquisar(cliente3._cpf));

console.log('Removendo cliente 3')
clientes.remover(cliente3._cpf);

console.log('Pesquisar cliente 3:')
console.log(clientes.pesquisar(cliente3._cpf));




