/* Criar um sistema que irá gerenciar as consultas de uma clínica médica.
Como requisitos, nós teremos as seguintes funcionalidades:

Adicionar uma nova consulta
Listar todas as consultas
Atualizar uma consulta existente
Cancelar uma consulta */

let consultas = [];

let consulta = {
  paciente: "",
  médico: "",
  data: "",
  horario: "",
};

let opcao = "";

console.log("Bem-vindo ao sistema de gerenciamento de consultas da clínica!");

process.stdin.on("data", function (data) {
  let entrada = data.toString().trim().toLowerCase();

  if (entrada == "sair") {
    console.log("Consultas registradas:");
    console.log(consultas);
    process.exit();
  } else if (entrada == "listar") {
    console.log("Listagem de consultas:");
    console.log(consultas);
  } else if (entrada == "atualizar") {
    console.log("Digite o nome do paciente para atualizar a consulta:");
    opcao = "atualizar";
  } else if (entrada == "cancelar") {
    console.log("Digite o nome do paciente para cancelar a consulta:");
    opcao = "cancelar";
  } else {
    if (opcao === "atualizar") {
      let encontrou = false;
      for (let i = 0; i < biblioteca.length; i++) {}
    }
  }
});
