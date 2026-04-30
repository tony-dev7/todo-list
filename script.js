let lista = document.getElementById("lista");

// carregar ao abrir
window.onload = function () {
  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

  tarefas.forEach(t => criarTarefa(t));
};

function adicionar() {
  let input = document.getElementById("tarefa");

  if (input.value === "") return;

  criarTarefa(input.value);

  salvar();

  input.value = "";
}

function criarTarefa(texto) {
  let item = document.createElement("li");

  let span = document.createElement("span");
  span.innerText = texto;

  span.onclick = function () {
    span.style.textDecoration = "line-through";
    salvar();
  };

  let botao = document.createElement("button");
  botao.innerText = "X";

  botao.onclick = function () {
    item.remove();
    salvar();
  };

  item.appendChild(span);
  item.appendChild(botao);
  lista.appendChild(item);
}

function salvar() {
  let tarefas = [];

  document.querySelectorAll("li span").forEach(span => {
    tarefas.push(span.innerText);
  });

  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}
function criarTarefa(texto) {
  let item = document.createElement("li");

  // 👇 animação ao aparecer
  item.style.animation = "aparecer 0.3s ease";

  let span = document.createElement("span");
  span.innerText = texto;

  span.onclick = function () {
    span.style.textDecoration = "line-through";
    salvar();
  };

  let botao = document.createElement("button");
  botao.innerText = "X";

  botao.onclick = function () {
    item.remove();
    salvar();
  };

  item.appendChild(span);
  item.appendChild(botao);
  lista.appendChild(item);
}