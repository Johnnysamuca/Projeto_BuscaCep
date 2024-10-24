export function retornaUmErro(data) {
  if (data.erro) {
    throw new Error("Cep não encontrado !");
  }
}
