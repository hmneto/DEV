let exec = require("child_process").exec;

const nome_projeto = "projeto"

const opcao = 1

if(opcao == 1){
  exec(`cd projetos && express ${nome_projeto} && cd ..`, function (
    err,
    stdout,
    stdin
  ) {
    console.log(err,stdout,stdin);
  });
}

if (opcao == 2){
exec(`cd projetos && cd projeto && dir && cd ..`, function (err, stdout, stdin) {
  console.log(stdout.split("\n"));
});
}

