let p = document.getElementById("primer_parrafo");

let table1_p1 = document.getElementsByTagName("tr")[0];

let table1_p2 = document.getElementsByTagName("tr")[1];

let table2_p1 = document.getElementsByTagName("tr")[2];

let table2_p2 = document.getElementsByTagName("tr")[3];

let span = document.getElementById("span");

p.onclick = primerparrafo;

table1_p1.onclick = tabla1parrafo1;

table1_p2.onclick = tabla1parrafo2;

table2_p1.onclick = tabla2parrafo1;

table2_p2.onclick = tabla2parrafo2;

function primerparrafo() {
    span.innerHTML = "Se presionó un párrafo del documento";
}

function tabla1parrafo1() {
    span.innerHTML = "Se presionó un párrafo del documento";
}

function tabla1parrafo2() {
    span.innerHTML = "Se presionó un párrafo del documento";
}

function tabla2parrafo1() {
    span.innerHTML = "Se presionó un párrafo contenido en la segunda tabla";
}

function tabla2parrafo2() {
    span.innerHTML = "Se presionó un párrafo contenido en la segunda tabla";
}