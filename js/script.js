"use strict"
const textAreaContent = document.querySelector('textarea')
const btnSendContent = document.querySelector('button')
const alerta_para_preencher = document.querySelector('#alerta_para_preencher')


//** FUNCAO QUE VERIFICA SE O CAMPO TEXTAAREA ESTA VAZIO, OU JA PREECHIDO
function verifyTextAreaContent(e){
    if(textAreaContent.value.length === 0){
        e.preventDefault() // Impedi que o botao envia o conteudo, caso o campo textarea nao esteja preenchido
        alerta_para_preencher.style.display = 'block'
        return
        
    }else if(!textAreaContent.value.length === 0){
        alerta_para_preencher.style.display = 'none'
        return
    }
    const textAreaValue = textAreaContent.value
    console.log(textAreaValue)
}

btnSendContent.addEventListener('click', verifyTextAreaContent)
