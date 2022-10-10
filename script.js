var listaderegistros = [];
function add() {
    var nomefuncionario = document.getElementById("nome").value;
    var funcao = document.getElementById("funcao").value;
    var salario = document.getElementById("salario").value;
    document.getElementById('editar').style.display = 'block';
    document.getElementById('excluir').style.display = 'block';
    document.getElementById('lista').style.display = 'flex';

    var registro = { 
        nomefuncionario : nomefuncionario,
        funcao : funcao,  
        salario : salario
    }
    listaderegistros.push(registro);
    listar(registro)
    
    var formulario = document.getElementById('formulario');
    formulario.reset();
}

function editname() {
    var newName = window.prompt('Digite o novo nome:');
    var newFunction = window.prompt('Digite a nova função:');
    var newSalary = window.prompt('Digite o novo salario:');

    var novaListaRegistro = {
        newName : newName,
        newFunction : newFunction,
        newSalary : newSalary
    }
    listaderegistros.push(novaListaRegistro);
}

function listar(registro) {
    var dados = document.getElementById('dados');
    var elementoLi = document.createElement('li');
    elementoLi.setAttribute("id", "listadeDados");

    elementoLi.append(registro.nomefuncionario);
    elementoLi.append(registro.funcao);
    elementoLi.append(registro.salario);

    dados.append(elementoLi);
}

function excluir() {
    document.getElementById('listadeDados').remove();
    document.getElementById('lista').style.display = 'none';
}

function editar(id) {
    document.getElementById("dados").addEventListener("click", editname);
    document.getElementById('lista').style.cursor = 'pointer';
}

