function add(){
    var nome = document.getElementById("nome").value;
    var funcao = document.getElementById("funcao").value;
    var salario = document.getElementById("salario").value;

    var texto = [nome, funcao, salario];
    document.getElementById('dados').innerHTML = texto;
    alert(texto)
    
}
function add(){
    var btnNova = document.createElement("button");
    var conteudoNovo = document.createTextNode("Editar");
    btnNova.appendChild(conteudoNovo);
    //document.getElementById('editar').innerHTML = edit
    var divAtual = document.getElementById("div1");
    document.body.insertBefore(btnNova, divAtual);
    
}
