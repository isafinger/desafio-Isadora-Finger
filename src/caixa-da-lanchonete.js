class CaixaDaLanchonete {
            constructor() {
                this.cardapio = {
                    cafe: 3.00,
                    chantily: 1.50,
                    suco: 6.20,
                    sanduiche: 6.50,
                    queijo: 2.00,
                    salgado: 7.25,
                    combo1: 9.50,
                    combo2: 7.50
                };
                
                this.extras = {
                    chantily: 'cafe',
                    queijo: 'sanduiche'
                };
            }
        
            calcularValorDaCompra(metodoDePagamento, itens) {
                let total = 0;
                
                // Verificação carrinho de compras vazio
                if (itens.length === 0){
                    return 'Não há itens no carrinho de compra!'; 
                } 

                for (let itemInfo of itens) {
                    const [codigo, quantidade] = itemInfo.split(',');
        
                    // Verificação de existência do item
                    if (!this.cardapio[codigo]){
                        return 'Item inválido!';
                    } 
                    
                    // Verificação de quantidade
                    if (Number(quantidade) <= 0){
                        return 'Quantidade inválida!';
                    } 

                    // Verificação itens extras
                    if (this.extras[codigo] && !itens.some(i => i.startsWith(this.extras[codigo]))) {
                        return 'Item extra não pode ser pedido sem o principal';
                    }
        
                    total += this.cardapio[codigo] * Number(quantidade);
                    
                }
        
                // Aplicação de desconto/acrescimo
                if (metodoDePagamento === 'dinheiro') {
                    total *= 0.95; // 5% de desconto
                } else if (metodoDePagamento === 'credito') {
                    total *= 1.03; // 3% de acrescimo
                } else if (metodoDePagamento !== 'debito'){
                    return 'Forma de pagamento inválida!'
                }
        
                return `R$ ${total.toFixed(2).replace('.', ',')}`;
            }
        }


export { CaixaDaLanchonete };
