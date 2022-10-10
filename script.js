var listaderegistros = [];

function add() {
  var nomefuncionario = document.getElementById("nome").value;
  var funcao = document.getElementById("funcao").value;
  var salario = document.getElementById("salario").value;

  var registro = {
    nomefuncionario: nomefuncionario,
    funcao: funcao,
    salario: salario,
  };
  listaderegistros.push(registro);

  resetarFormulario();
  limparHtml();
  listar();
}

function listar() {
  listaderegistros.forEach((element) => {
    const registro = element;
    var dados = document.getElementById("lista");
    var elementoLi = document.createElement("li");
    elementoLi.setAttribute("id", "dadoslistaNome");
    elementoLi.append(registro.nomefuncionario);

    const botaoEditar = document.createElement("button");
    botaoEditar.innerHTML = "Editar";

    const botaoDeletar = document.createElement("button");
    botaoDeletar.innerHTML = "Deletar";
    botaoDeletar.onclick = () => {
      excluir(elementoLi);
    };

    elementoLi.append(botaoEditar);
    elementoLi.append(botaoDeletar);

    dados.append(elementoLi);
  });
}

function resetarFormulario() {
  var formulario = document.getElementById("formulario");
  formulario.reset();
}

function limparHtml() {
  var lista = document.getElementById("lista");
  lista.innerHTML = "";
}

function excluir(registro) {
  registro.remove();
}

function editar(id) {
  document.getElementById(id).style.display = "block";
}

function fechar(id) {
  document.getElementById(id).style.display = "none";
}

function editname() {
  var newname = window.prompt("Digite o novo nome:");
  document.getElementById("dadoslistaNome").innerHTML = newname;
}

function editfunction() {
  var newfunction = window.prompt("Digite a nova função:");
  document.getElementById("dadoslistaFuncao").innerHTML = newfunction;
}

function editsalary() {
  var newsalary = window.prompt("Digite o novo salario:");
  document.getElementById("dadoslistaSalario").innerHTML = newsalary;
}
