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
      for (let i = 0; i < biblioteca.length; i++) {
        if (consultas[i].paciente.toLowerCase() === entrada) {
          console.log("Consulta encontrada para ${entrada}.");
          console.log("Digite o novo horário da consulta:");
          opcao = "atualizar_horario";
          encontrou = true;
          break;
        }
      }
      if (!encontrou) {
        console.log("Consulta não encontrada para ${entrada}.");
        opcao = "";
      }
    } else if (opcao === "cancelar") {
      let encontrou = false;
      for (let i = 0; i < biblioteca.length; i++) {
        if (consultas[i].paciente.toLowerCase() === entrada) {
          consultas.splice(i, 1);
          console.log("Consulta de ${entrada} cancelada com sucesso.");
          encontrou = true;
          break;
        }
      }
      if (!encontrou) {
        console.log("Consulta não encontrada para ${entrada}.");
      }
      opcao = "";
    } else {
      if (!consulta.paciente) {
        livros.paciente = entrada;
        console.log("Nome do médico:");
      } else if (!consulta.medico) {
        consulta.medico = entrada;
        console.log("Data da consulta (DD/MM/AAAA):");
      } else if (!consulta.data) {
        consulta.data = entrada;
        console.log("Horário da consulta:");
      } else if (!consulta.horario) {
        consulta.horario = entrada;
        consulta.push(consulta);
        consulta = {};
        console.log("Consulta agendada com sucesso!");
        console.log("Para adicionar nova consulta, digite o nome do paciente:");
      }
    }
  }
});
