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

function listar(registro) {

    var dados = document.getElementById('dados');
    var elementoLi = document.createElement('li');
    elementoLi.setAttribute("id", "dadoslistaNome")
    elementoLi.append(registro.nomefuncionario);
    dados.append(elementoLi);

    var dadosF = document.getElementById('dadosF');
    var elementoLi = document.createElement('li');
    elementoLi.setAttribute("id", "dadoslistaFuncao")
    elementoLi.append(registro.funcao);
    dadosF.append(elementoLi);

    var dados = document.getElementById('dadosS');
    var elementoLi = document.createElement('li');
    elementoLi.setAttribute("id", "dadoslistaSalario")
    elementoLi.append(registro.salario);
    dadosS.append(elementoLi);

}

function excluir() {
    
    document.getElementById('dadoslistaNome').remove()
    document.getElementById('dadoslistaFuncao').remove()
    document.getElementById('dadoslistaSalario').remove()
    document.getElementById('excluir').style.display = 'none';
    document.getElementById('editar').style.display = 'none';
    document.getElementById('lista').style.display = 'none';


}

function editar(id) {

    document.getElementById("dadosNome").addEventListener("click", editname);
    document.getElementById("dadosFuncao").addEventListener("click", editfunction);
    document.getElementById("dadosSalario").addEventListener("click", editsalary); 

    document.getElementById('dadosNome').style.cursor = 'pointer';
    document.getElementById('dadosFuncao').style.cursor = 'pointer';
    document.getElementById('dadosSalario').style.cursor = 'pointer';

}

function editname() {
    var newname = window.prompt('Digite o novo nome:')
    document.getElementById('dadoslistaNome').innerHTML = newname;
    
}


function editfunction() {
    var newfunction = window.prompt('Digite a nova função:')
    document.getElementById('dadoslistaFuncao').innerHTML = newfunction;
}

function editsalary() {
    var newsalary = window.prompt('Digite o novo salario:')
     document.getElementById('dadoslistaSalario').innerHTML = newsalary;
}  
