import { lancaErro } from "./lancaErro.js";

export function avaliaCampo(cep) {
  if (isNaN(cep.value) || cep.value.length < 8 || cep.value === "") {
    lancaErro("Cep invalido!");
    throw new Error("Cep invalido!");
  }
}
