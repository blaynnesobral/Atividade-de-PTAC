const nomes = produto
 .filter(porduto => porduto.preco <= 5)
 .map(produto => produto.nome);

console.log(nomes);
