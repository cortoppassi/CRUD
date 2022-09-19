var listaderegistros = [];
function add(){
    var nomefuncionario = document.getElementById("nome").value;
    var funcao = document.getElementById("funcao").value;
    var salario = document.getElementById("salario").value;

    var registro = { 
        nomefuncionario : nomefuncionario, 
        funcao : funcao, 
        salario : salario
    };
    listaderegistros.push(registro);
    listar(registro)
    
    var formulario = document.getElementById('formulario');
    formulario.reset();
}

function listar(registro){

    
    var dados = document.getElementById('dados');
    var elementoLi = document.createElement('li')
    elementoLi.append(registro.nomefuncionario);
    dados.append(elementoLi)

}