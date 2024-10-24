const bairro = document.querySelector(".caixa-informacaoCep_info--bairro");
const cidade = document.querySelector(".caixa-informacaoCep_info--cidade");
const estado = document.querySelector(".caixa-informacaoCep_info--estado");
const regiao = document.querySelector(".caixa-informacaoCep_info--regiao");
const ddd = document.querySelector(".caixa-informacaoCep_info--ddd");
const caixaInformacaoCep = document.querySelector(".caixa-InformacaoCep");

export function preencheInfo(data) {
  bairro.innerHTML = `Bairro: ${data.bairro}`;
  cidade.innerHTML = `Cidade: ${data.localidade}`;
  estado.innerHTML = `Estado: ${data.estado}`;
  regiao.innerHTML = `Região: ${data.regiao}`;
  ddd.innerHTML = `DDD: ${data.ddd}`;

  caixaInformacaoCep.classList.add("aberto");
}
