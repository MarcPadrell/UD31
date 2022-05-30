
// Retorna un número aleatorio entre min (incluido) y max (excluido)
function random_limites(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

function counter(num){

    switch (num) {
        case 1:
            cont_1++;
            break;
        case 2:
            cont_2++;
            break;
        case 3:
            cont_3++;
            break;
        case 4:
            cont_4++;
            break;
        case 5:
            cont_5++;
            break;
        case 6:
            cont_6++;
            break;
    }

}

var cont = 0;
var suma = []
var cont_1 = 0, cont_2 = 0, cont_3 = 0, cont_4 = 0, cont_5 = 0, cont_6 = 0;

while (cont < 36000) {

    let dado_1 = random_limites(1, 7);
    let dado_2 = random_limites(1, 7);

    counter(dado_1);
    counter(dado_2);

    console.log("Dado 1: " + dado_1);
    console.log("Dado 2: " + dado_2);

    suma.push(dado_1 + dado_2);

    cont++;
    dado_1 = 0;
    dado_2 = 0;

}

suma.forEach(function (elemento, indice, array) {
    console.log("Suma y indicde del array: " + elemento, indice);
})

document.write("Numero 1 ha salido: "+cont_1+"<br>");
document.write("Numero 2 ha salido: "+cont_2+"<br>");
document.write("Numero 3 ha salido: "+cont_3+"<br>");
document.write("Numero 4 ha salido: "+cont_4+"<br>");
document.write("Numero 5 ha salido: "+cont_5+"<br>");
document.write("Numero 6 ha salido: "+cont_6+"<br>");