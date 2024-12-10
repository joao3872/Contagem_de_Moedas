function contar() {
    var valor = document.querySelector('input#valor_total')
    
    var total = document.querySelector('span.total')
    var umReal = document.querySelector('span#um_real')

    var cinquentaCentavos = document.querySelector('span#cinquenta_centavos')
    var vinteECinco = document.querySelector('span#vinte-e-cinco_centavos')

    var dezCentavos = document.querySelector('span#dez_centavos')
    var cincoCentavos = document.querySelector('span#cinco_centavos')


    var real = document.querySelector('p.real')
    var cinquenta = document.querySelector('p.cinquenta')
    var vinteeCinco = document.querySelector('p.vinteecinco')


    // Valor do input...
    valorTotal = Number(valor.value)
    total.textContent = `${valorTotal.toFixed(2).replace('.', ',')}`


    // Cálculo simples das moedas...
    const conta1 = valorTotal * 2
    const conta2 = valorTotal * 4
    const conta3 = valorTotal * 10
    const conta4 = valorTotal * 20

    // Cálculo da quantidade de moedas, que está sobrando...
    const quantidadeMais = (valorTotal - parseInt(valorTotal)).toFixed(2)


    // Quantidade das moedas...
    umReal.textContent = `${parseInt(valorTotal)}`
    cinquentaCentavos.textContent = `${parseInt(conta1)}`
    vinteECinco.textContent = `${parseInt(conta2)}`
    
    dezCentavos.textContent = `${parseInt(conta3)}`
    cincoCentavos.textContent = `${parseInt(conta4)}`


    // Quantidade a mais de moedas...
    if (quantidadeMais == 0 || quantidadeMais == 0.50 || parseInt(valorTotal) == 0) {
        real.textContent = ' '
        cinquenta.textContent = ' '
        vinteeCinco.textContent = ' '
    } else {
        real.textContent = `E R$ ${quantidadeMais} Centavos.`

        if (quantidadeMais > 0.50) {
            formula = quantidadeMais - 0.50
            cinquenta.textContent = `E R$ ${(formula).toFixed(2)} Centavos.`
        }

        if (quantidadeMais > 0.75) {
            formula2 = quantidadeMais - 0.75
            vinteeCinco.textContent = `E R$ ${(formula2).toFixed(2)} Centavos.`
        }
    }
}




let btnGithub = document.querySelector('.btn_github')

let iconGithub = document.querySelector('.fab')

function iconGitHub() {
    btnGithub.addEventListener('mouseenter', () => {
        iconGithub.setAttribute('src', 'imagens/github-brands2.svg')
    })

    btnGithub.addEventListener('mouseleave', () => {
        iconGithub.setAttribute('src', 'imagens/github-brands-solid.svg')
    })

    btnGithub.addEventListener('touchstart', () => {
        iconGithub.setAttribute('src', 'imagens/github-brands2.svg')
    })

    btnGithub.addEventListener('touchend', () => {
        setTimeout(() => {
            iconGithub.setAttribute('src', 'imagens/github-brands-solid.svg')
        }, 3000)
    })
}

iconGitHub()
