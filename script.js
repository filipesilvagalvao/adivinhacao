//pega um número alatório de 1 a 10
const num = Math.floor(Math.random() * 100)
//seleciona o campo onde vai aparecer as mensagens
const msn = document.querySelector('.msn>p')
//seleciona o campo de tentativas restantes
const numAttempts = document.querySelector('.numAttempts>p>span')
//seleciona o btn de chutar
const guessShot = document.querySelector('.guessShot')
//seleciona o input number
const guessNumber = document.querySelector('#shotTip')
//seleciona o main
const main = document.querySelector('main')

//função que faz as verificações, diz se acertou, decrementa as chances e exibe mensagens
function shotTip() {
    const tip = guessNumber.value
    //quatro verificações: se o número é válido, se acertou e se o chute foi menor ou maior
    if (tip <= 0 || tip > 100) {
        alert('O número deve ser de 1 à 100')
    }
    else if (tip == num) {
        msn.innerText = 'Você acertou! 🎉'

        guessNumber.setAttribute('disabled', true)
        //adiciona o botão de rejogar
        main.innerHTML += `<button class="reload" onclick="reloader()">Rejogar?</button>`
    }
    else if (tip > num) {
        msn.innerText = `O número secreto é menor que: ${tip}`

        numAttempts.innerText = Number(numAttempts.innerText) - 1
    }
    else if (tip < num) {
        msn.innerText = `O número secreto é maior que: ${tip}`

        numAttempts.innerText = Number(numAttempts.innerText) - 1
    }
    //reset do valor do input, zerar o input number
    guessNumber.value = ''
    //verifica se acabou as chances
    if (Number(numAttempts.innerText) <= 0) {
        msn.innerText = `Você perdeu! O número secreto era: ${num}`

        guessNumber.setAttribute('disabled', true)
        //adiciona o botão de rejogar
        main.innerHTML += `<button class="reload" onclick="reloader()">Rejogar?</button>`
    }

}
//eventos de click e enter que fazer a função shotTip executar
guessShot.addEventListener('click', shotTip)
guessNumber.addEventListener('keydown', (e) => e.key === 'Enter' ? shotTip() : '')
//função de que recarrega a página, serve para rejogar
function reloader() {
    location.reload();
}


