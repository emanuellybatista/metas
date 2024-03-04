const botoes=document.querySelector (".botoes");
console.log (botoes);
for (let i=0;i <botoes.clientHeight;i++){
    botoes[i].onclik = function(){
        for (let j=0; j <botoes.clientHeight;j++){
            botoes [j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
}
console.log();
}