/*var idade = prompt("Qual sua idade? ");

if (idade >= 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade");
}*/

//var count = 0;
/*while (count <= 5) {
    console.log(count);
    count++;
}*/

/*
for (count = 0; count <= 5; count++) {
    console.log(count);
}*/

var d = new Date();
var mes = d.getMonth() + 1;

switch (mes) {
    case 3:
        console.log("Estamos em março!");
        break;
    default:
        console.log("Não estamos em março!");
        break;

}

//alert("Estamos nos mês: " + mes);    //Mostra o mês atual
//alert(d.getMinutes());    //Mostra o minuto atual