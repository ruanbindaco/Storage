function salvar(){
  var nome = document.getElementById("nome").value;
  localStorage.setItem("nome", nome);

  var texto = document.getElementById("texto").value;
  localStorage.setItem("texto", texto);
}

function limpar(){
  localStorage.clear();
  window.location.reload();
}

function carregar(){
  if("nome" in localStorage){
    document.getElementById("nome").value = localStorage.getItem("nome");
  }
  if("texto" in localStorage){
    document.getElementById("texto").value = localStorage.getItem("texto");
  }
}