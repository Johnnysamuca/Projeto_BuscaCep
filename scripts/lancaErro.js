const caixaErro = document.querySelector(".caixa-erro");
const mensagemError = document.querySelector(".caixa-erro_message-error");
const caixaInformacaoCep = document.querySelector(".caixa-InformacaoCep");

export function lancaErro(mensagemErro) {
  caixaErro.classList.add("aberto");
  mensagemError.innerHTML = mensagemErro;
  caixaInformacaoCep.classList.remove("aberto");

  setTimeout(() => {
    caixaErro.classList.remove("aberto");
  }, 3000);
}
