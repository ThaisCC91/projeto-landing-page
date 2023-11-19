const agradecerContato = () => {
    alert("Obrigado por entrar em contato conosco")
}
let inputNome = document.getElementById("nome")
let inputEmail = document.getElementById("email")
let inputMensagem = document.getElementById("mensagem")

function validarEmail(email){
    const regexEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return regexEmail.test(email);
}

const verificarInput = (event) => {
    event.preventDefault()
    console.log(inputNome.value)
    console.log(inputEmail.value)
    console.log(inputMensagem.value)
    if (validarEmail(inputEmail.value)){
        alert(`Entraremos em contato através do endereço ${inputEmail.value}`)
    }else {
        alert(`Nenhum endereço de E-mail foi encontrado`)
    }
    inputNome.value = ""
    inputEmail.value = ""
    inputMensagem.value = ""
}