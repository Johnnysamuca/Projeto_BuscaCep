import { avaliaCampo } from "./validaCampo.js";
import { lancaErro } from "./lancaErro.js";
import { preencheInfo } from "./preencheInfo.js";
import { retornaUmErro } from "./retornaUmErro.js";

document.addEventListener("DOMContentLoaded", () => {
  const btnPesquisaCep = document.querySelector(".caixa-BuscaCep_btn-busca");

  const campoCep = document.querySelector(".caixa-BuscaCep_campoBusca");

  async function buscarCep() {
    try {
      avaliaCampo(campoCep);
      const cep = campoCep.value;
      let url = `https://viacep.com.br/ws/${cep}/json/`;
      const response = await fetch(url);
      const data = await response.json();
      retornaUmErro(data);
      preencheInfo(data);
    } catch (error) {
      lancaErro(error);
    }
  }

  btnPesquisaCep.addEventListener("click", buscarCep);
});
