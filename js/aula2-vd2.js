
function clicou() {
    //alert("Obrigado por clicar");
    //console.log(document.getElementById("agradecimento"));
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar() {
    window.open("https://botelhoadvocacia.com.br/portfolio/");          //Abre uma nova aba com com endereço
    //window.location.href = "https://botelhoadvocacia.com.br/portfolio/"; //Muda a página atual para o endereço indicado
}
/*
//Dessa forma fica restrito a um único id
function trocar() {
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"; 
    //alert("trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}*/

function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse"; 
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

//Ao carregar a página faça:
/*function load(){
    alert("Página carregada");
}*/

function funcaoChange(elemento){
    console.log(elemento.value);
}