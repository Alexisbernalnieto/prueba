var calcular=document.getElementById("calcular");

calcular.addEventListener("click",()=>{
    var base=document.getElementById("base").value;
    var altura=document.getElementById("altura").value;
    var area=base *altura /2;
    document.getElementById("area").value=parseInt(area);

});