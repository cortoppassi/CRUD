function add(){
    var nome = document.getElementById("nome").value;
    var funcao = document.getElementById("funcao").value;
    var salario = document.getElementById("salario").value;
    //Pega o ID nome e transfora em variaveis
   //document.getElementById('primeiro').innerHTML = input + inpu + inp
    //Seleciona o ID primeiro e escreve a variavel input
    
    //document.write.primeiro(input + inpu + inp).value
    var texto = nome + funcao + salario
    document.getElementById('primeiro').innerHTML = texto;
    window.document.write(texto+innerHTML)
}
