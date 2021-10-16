(function(){
    document.getElementById("lar").innerHTML = Math.random();
    document.getElementById("rar").innerHTML = Math.random();
    document.getElementById("llr").innerHTML = Math.random();
    document.getElementById("rlr").innerHTML = Math.random();
    setTimeout(arguments.callee, 500);
})();