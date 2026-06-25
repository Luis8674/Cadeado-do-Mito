function gerarSenha(){

    const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%&*()-_=+?";

    let caracteres = "";

    if(document.getElementById("maiusculas").checked)
        caracteres += maiusculas;

    if(document.getElementById("minusculas").checked)
        caracteres += minusculas;

    if(document.getElementById("numeros").checked)
        caracteres += numeros;

    if(document.getElementById("simbolos").checked)
        caracteres += simbolos;

    if(caracteres === ""){
        alert("Selecione pelo menos uma opção!");
        return;
    }

    let tamanho = document.getElementById("tamanho").value;
    let senha = "";

    for(let i = 0; i < tamanho; i++){
        senha += caracteres.charAt(
            Math.floor(Math.random() * caracteres.length)
        );
    }

    document.getElementById("resultado").textContent = senha;

    document.getElementById("mensagem").textContent =
    "🇧🇷 Sua senha é a mais segura do BRASIL, TÁ OK?";
}
