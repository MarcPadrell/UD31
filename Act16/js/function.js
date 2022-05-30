window.onload = function() {
    var fecha = new Date();

    setInterval(function(){
        document.getElementById("hores").innerHTML = fecha.getHours();

        document.getElementById("minuts").innerHTML = fecha.getMinutes();

        document.getElementById("segons").innerHTML = fecha.getSeconds();
    },100);

};





