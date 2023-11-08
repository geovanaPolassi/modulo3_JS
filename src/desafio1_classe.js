const LojaFrutas = require ('./classLojaFrutas')

const frutas = new LojaFrutas('Acida', 'Limão', 'Novembro', '5', 'R$ 2,50');

console.log(frutas.tipo);
console.log(frutas.nome);
console.log(frutas.estacao);
console.log(frutas.quantidade);
console.log(frutas.valor);

console.log("======================"); // testeSobrenome 

 
 Object.keys(frutas).forEach(key => { // cria indice chamado key para os itens do objeto
    console.log(key, frutas[key]);    // exibe a lista de conteúdo do objeto em sequencia
  });