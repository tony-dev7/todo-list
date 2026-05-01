let lista = document.getElementById("lista");

// carregar ao abrir
window.onload = function () {
  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

  tarefas.forEach(t => {
    let item = criarTarefa(t.texto);

    if (t.feito) {
      item.querySelector("span").classList.add("feito");
    }
  });
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

  // animação ao adicionar
  item.classList.add("animar");

  let span = document.createElement("span");
  span.innerText = texto;

  // marcar como concluído
  span.onclick = function () {
    span.classList.toggle("feito");
    salvar();
  };

  let botao = document.createElement("button");
  botao.innerText = "X";

  // animação ao deletar
  botao.onclick = function () {
    item.classList.add("remover");

    setTimeout(() => {
      item.remove();
      salvar();
    }, 300);
  };

  item.appendChild(span);
  item.appendChild(botao);
  lista.appendChild(item);

  return item;
}

// salvar com status
function salvar() {
  let tarefas = [];

  document.querySelectorAll("li").forEach(item => {
    let texto = item.querySelector("span").innerText;
    let feito = item.querySelector("span").classList.contains("feito");

    tarefas.push({ texto, feito });
  });

  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}