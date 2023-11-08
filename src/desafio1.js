const lojaF = {
    tipo: 'ácida',
    nome: 'limão',
    estacao: 'novembro',
    quantidade: '5',
    valor: 'R$ 2,50'
};

console.log("Na loja temos a fruta = " + lojaF.nome)
console.log("Ela é uma fruta " + lojaF.tipo + ", colhemos ela apenas na estação " + lojaF.estacao + ", temos " + lojaF.quantidade + " para a venda, no valor de " + lojaF.valor);

Object.keys(lojaF).forEach(key => { // cria indice chamado key para os iens do objeto
    console.log(key, lojaF[key]);    // exibe a lista de conteúdo do objeto em sequencia
  });

/*--------------------------------------------------------------------------------------------------------------------*/
