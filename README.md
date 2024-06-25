### Sistema de Gerenciamento de Consultas Médicas

Este é um sistema simples para gerenciar as consultas de uma clínica médica, implementado em Node.js utilizando entrada de dados via console.

#### Funcionalidades

1. **Adicionar uma nova consulta**
   - Permite agendar uma nova consulta fornecendo o nome do paciente, médico, data e horário.

2. **Listar todas as consultas**
   - Exibe todas as consultas agendadas até o momento.

3. **Atualizar uma consulta existente**
   - Permite alterar qualquer informação de uma consulta já agendada, selecionando-a pelo nome do paciente.

4. **Cancelar uma consulta**
   - Remove uma consulta da lista, selecionando-a pelo nome do paciente.

#### Como Usar

Para iniciar o sistema, execute o script em Node.js. Ele iniciará o prompt interativo para interação com o usuário.

#### Comandos Disponíveis

- **Para agendar uma consulta:** Digite o nome do paciente, médico, data (DD/MM/AAAA) e horário (HH:MM).
- **Para listar consultas:** Digite 'listar'.
- **Para atualizar uma consulta:** Digite 'atualizar' e siga as instruções para selecionar a consulta e atualizar as informações desejadas.
- **Para cancelar uma consulta:** Digite 'cancelar' e forneça o nome do paciente da consulta a ser cancelada.
- **Para sair do sistema:** Digite 'sair'.

#### Exemplo de Uso

```bash
$ node nome_do_arquivo.js
```

#### Exemplo de Código

```javascript
let consultas = [];

let consulta = {
  paciente: "",
  médico: "",
  data: "",
  horario: "",
};

let opcao = "";

console.log("Bem-vindo ao sistema de gerenciamento de consultas da clínica!");
console.log("Digite o nome do paciente para agendar a consulta:");

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
      for (let i = 0; i < consultas.length; i++) {
        if (consultas[i].paciente.toLowerCase() === entrada) {
          console.log(`Consulta encontrada para ${entrada}.`);
          console.log("Digite o nome do novo médico:");
          opcao = "atualizar_medico";
          consulta = consultas[i];
          encontrou = true;
          break;
        }
      }
      if (!encontrou) {
        console.log(`Consulta não encontrada para ${entrada}.`);
        opcao = "";
      }
    } else if (opcao === "atualizar_medico") {
      consulta.medico = entrada;
      console.log("Digite a nova data da consulta (DD/MM/AAAA):");
      opcao = "atualizar_data";
    } else if (opcao === "atualizar_data") {
      consulta.data = entrada;
      console.log("Digite o novo horário da consulta (HH:MM):");
      opcao = "atualizar_horario";
    } else if (opcao === "atualizar_horario") {
      consulta.horario = entrada;
      console.log("Consulta atualizada com sucesso!");
      opcao = "";
    } else if (opcao === "cancelar") {
      let encontrou = false;
      for (let i = 0; i < consultas.length; i++) {
        if (consultas[i].paciente.toLowerCase() === entrada) {
          consultas.splice(i, 1);
          console.log(`Consulta de ${entrada} cancelada com sucesso.`);
          encontrou = true;
          break;
        }
      }
      if (!encontrou) {
        console.log(`Consulta não encontrada para ${entrada}.`);
      }
      opcao = "";
    } else {
      if (!consulta.paciente) {
        consulta.paciente = entrada;
        console.log("Nome do médico:");
      } else if (!consulta.medico) {
        consulta.medico = entrada;
        console.log("Data da consulta (DD/MM/AAAA):");
      } else if (!consulta.data) {
        consulta.data = entrada;
        console.log("Horário da consulta (HH:MM):");
      } else if (!consulta.horario) {
        consulta.horario = entrada;
        consultas.push(consulta);
        consulta = {};
        console.log("Consulta agendada com sucesso!");
        console.log("Para adicionar nova consulta, digite o nome do paciente:");
        console.log("Para listagem de consultas, digite: 'listar'.");
        console.log("Para cancelar uma consulta, digite: 'cancelar'.");
        console.log("Para atualizar uma consulta, digite: 'atualizar'.");
        console.log("Para sair do cadastro,  digite: 'sair'.");
      }
    }
  }
});
```
