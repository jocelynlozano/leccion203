window.addEventListener("load", function() {
    var boton = document.getElementById("calcular");
    boton.addEventListener("click", function() {
        var segundos = parseInt(document.getElementById("segundos").value);
        var numeroInicial = parseInt(document.getElementById("numeroInicial").value);
        setInterval(function(){
            document.getElementById("mensaje").innerHTML = numeroInicial++; }, segundos*1000);
            document.getElementById("segundos").value = "";
            document.getElementById("numeroInicial").value = "";
});
});