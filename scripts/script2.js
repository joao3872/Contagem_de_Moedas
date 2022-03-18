function conte() {
    var valor = document.querySelector('input#valor_input')
    
    var check1 = document.querySelector('input#check1')

    var check2 = document.querySelector('input#check2')

    var check3 = document.querySelector('input#check3')

    var check4 = document.querySelector('input#check4')

    var check5 = document.querySelector('input#check5')

    var total = document.querySelector('span.total2')

    var res = document.querySelector('p.res')

    valorTotal = parseInt(valor.value)
    if (!isNaN(valorTotal)) {
        total.textContent = `${valorTotal}`
    }


    // Condição lógica para o checkbox 1 e o checkbox 2...
    verificar = (check1.checked && check2.checked == true && check3.checked == false && check4.checked == false && check5.checked == false)

    // Condição lógica para o checkbox 1 e o checkbox 3...
    verificar2 = (check1.checked && check3.checked == true && check2.checked == false && check4.checked == false && check5.checked == false)

    // Condição lógica para o checkbox 1 e o checkbox 4...
    verificar3 = (check1.checked && check4.checked == true && check2.checked == false && check3.checked == false && check5.checked == false)

    // Condição lógica para o checkbox 1 e o checkbox 5...
    verificar4 = (check1.checked && check5.checked == true && check2.checked == false && check3.checked == false && check4.checked == false)

    // Condição lógica para o checkbox 2 e o checkbox 3...
    verificar5 = (check2.checked && check3.checked == true && check1.checked == false && check4.checked == false && check5.checked == false)

    // Condição lógica para o checkbox 2 e o checkbox 4...
    verificar6 = (check2.checked && check4.checked == true && check1.checked == false && check3.checked == false && check5.checked == false)

    // Condição lógica para o checkbox 2 e o checkbox 5...
    verificar7 = (check2.checked && check5.checked == true && check1.checked == false && check3.checked == false && check4.checked == false)

    // Condição lógica para o checkbox 3 e o checkbox 4...
    verificar8 = (check3.checked && check4.checked == true && check1.checked == false && check2.checked == false && check5.checked == false)

    // Condição lógica para o checkbox 3 e o checkbox 5...
    verificar9 = (check3.checked && check5.checked == true && check1.checked == false && check2.checked == false && check4.checked == false)

    // Condição lógica para o checkbox 4 e o checkbox 5...
    verificar10 = (check4.checked && check5.checked == true && check1.checked == false && check2.checked == false && check3.checked == false)


    // Cálculos para a quantidade das moedas...
    conta1 = valorTotal / 2
    conta2 = (valorTotal * 2) / 2
    conta3 = (valorTotal * 4) / 2
    conta4 = (valorTotal * 10) / 2
    conta5 = (valorTotal * 20) / 2

    // Captura de casas decimais...
    const quantidadeMais = (conta1 - parseInt(conta1)).toFixed(2)


    let resposta = ''

    if (verificar && quantidadeMais == 0.50) {
        resposta = `${conta1 - quantidadeMais} moedas de 1 Real + ${conta2 + 1} moedas de 50 Centavos é igual a ${valorTotal}`
    } else if (verificar) {
        resposta = `${conta1} moedas de 1 Real + ${conta2} moedas de 50 Centavos é igual a ${valorTotal}`
    } else if (verificar2 && quantidadeMais == 0.50) {
        resposta = `${conta1 - quantidadeMais} moedas de 1 Real + ${conta3 + 2} moedas de 25 Centavos é igual a ${valorTotal}`
    } else if (verificar2) {
        resposta = `${conta1} moedas de 1 Real + ${conta3} moedas de 25 Centavos é igual a ${valorTotal}`
    } else if (verificar3 && quantidadeMais == 0.50) {
        resposta = `${conta1 - quantidadeMais} moedas de 1 Real + ${conta4 + 5} moedas de 10 Centavos é igual a ${valorTotal}`
    } else if (verificar3) {
        resposta = `${conta1} moedas de 1 Real + ${conta4} moedas de 10 Centavos é igual a ${valorTotal}`
    } else if (verificar4 && quantidadeMais == 0.50) {
        resposta = `${conta1 - quantidadeMais} moedas de 1 Real + ${conta5 + 10} moedas de 5 Centavos é igual a ${valorTotal}`
    } else if (verificar4) {
        resposta = `${conta1} moedas de 1 Real + ${conta5} moedas de 5 Centavos é igual a ${valorTotal}`
    } else if (verificar5) {
        resposta = `${conta2} moedas de 50 Centavos + ${conta3} moedas de 25 Centavos é igual a ${valorTotal}`
    } else if (verificar6) {
        resposta = `${conta2} moedas de 50 Centavos + ${conta4} moedas de 10 Centavos é igual a ${valorTotal}`
    } else if (verificar7) {
        resposta = `${conta2} moedas de 50 Centavos + ${conta5} moedas de 5 Centavos é igual a ${valorTotal}`
    } else if (verificar8) {
        resposta = `${conta3} moedas de 25 Centavos + ${conta4} moedas de 10 Centavos é igual a ${valorTotal}`
    } else if (verificar9) {
        resposta = `${conta3} moedas de 25 Centavos + ${conta5} moedas de 5 Centavos é igual a ${valorTotal}`
    } else {
        resposta = `${conta4} moedas de 10 Centavos + ${conta5} moedas de 5 Centavos é igual a ${valorTotal}`
    }


    // Condição lógica para Apagar resposta...
    apagarResposta = (!(verificar) && !(verificar2) && !(verificar3) && !(verificar4) && !(verificar5) && !(verificar6) && !(verificar7) && !(verificar8) && !(verificar9) && !(verificar10))

    // Apagar resposta...
    if (valorTotal == 0 || isNaN(valorTotal) || apagarResposta) {
        resposta = ' '
    }


    // Exibir um dos resultados, de acordo com a condição satisfeita...
    res.textContent = `${resposta}`
}



function numeroInteiro(num) {
    var ver = /[^0-9]/
    ver.lastIndex = 0
    var campo = num

    if (ver.test(campo.value)) {
        campo.value = ''
    }
}
