function mueveReloj(){
    var fecha = new Date();

        document.getElementById("hores").innerHTML = fecha.getHours();

        document.getElementById("minuts").innerHTML = fecha.getMinutes();

        document.getElementById("segons").innerHTML = fecha.getSeconds();


    setTimeout("mueveReloj()",1000)

};




