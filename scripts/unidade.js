function contarUnidades() {
    var valor = document.querySelector('input#valor')
    
    var unidades = document.querySelector('span.unidades')
    
    var unidade_real = document.querySelector('span#unidade_real')
    
    var unidade_cinquenta = document.querySelector('span#unidade_cinquenta')
    
    var unidade_vinteCinco = document.querySelector('span#unidade_vinte-e-cinco')
    
    var unidade_dez = document.querySelector('span#unidade_dez')
    
    var unidade_cinco = document.querySelector('span#unidade_cinco')
    
    
    // Valor do input...
    total = parseInt(valor.value)
    unidades.textContent = `${total}`
    
    
    // Cálculo simples para os valores em reais...
    const conta1 = total / 2
    const conta2 = total / 4
    const conta3 = total / 10
    const conta4 = total / 20
    
    
    // Valores em Reais para cada quantidade de moeda...
    unidade_real.textContent = `R$ ${(total).toFixed(2).replace('.', ',')}`
    
    unidade_cinquenta.textContent = `R$ ${(conta1).toFixed(2).replace('.', ',')}`
    
    unidade_vinteCinco.textContent = `R$ ${(conta2).toFixed(2).replace('.', ',')}`
    
    unidade_dez.textContent = `R$ ${(conta3).toFixed(2).replace('.', ',')}`
    
    unidade_cinco.textContent = `R$ ${(conta4).toFixed(2).replace('.', ',')}`
}



function revelar() {
    var mostrar = document.querySelector('section#container-unidades')
    
    var ocultar = document.querySelector('section.container')
    
    var legenda = document.querySelector('label.legenda')
    
    if (mostrar.style.display != 'block') {
        mostrar.style.display = 'block'
        ocultar.style.display = 'none'
        legenda.innerHTML = '<strong>Fechar</strong>'
    } else {
        mostrar.style.display = 'none'
        ocultar.style.display = 'block'
        legenda.innerHTML = '<strong>Mostrar</strong>'
    }
}
