var mysql = require('mysql')
let client = mysql.createConnection({
  host: 'db',
  user: 'xxxx',
  password: 'xxxx',
  port: 3306,
})
let comando = function (query) {
  client.query(query, function (err, res) {
    if (err) console.log(err)
    else { console.log(res) }
  })
}
//comando(`
//  create database if not exists ok 
//  default character set utf8 
//  default collate utf8_general_ci
//`)

// usar o banco de dados selecionado
//comando('use cadastro')

//comando para criar a tabela se não existir

//comando(`create table if not exists pessoas(
//    id int not null auto_increment,
//    nome varchar(30) not null,
//    nascimento date,
//    sexo enum('M', 'F'),
//    peso float(5,2),
//    altura float(3,2),
//    nacionalidade varchar(20) default 'Brasil',
//    primary key(id)
//    )default charset = utf8
//`)

//comando('select * from pessoas')

//comando(`insert into pessoas
//  (id,nome,nascimento,sexo,peso,altura,nacionalidade)
//  values
//  (default, 'Creuza','1920-12-30', 'F', '50.2', '1.65', default),
//  (default, 'Honório', '1991-04-05', 'M', '80.2', '1.77', default),
//  (default, 'Janaina', '2000-11-04', 'F', '60.3', '1.66', default)
//`)

//comando(`create table if not exists cursos(
//  nome varchar(30) not null unique,
//  descricao text,
//  carga int unsigned,
//  tataulas int unsigned,
//  ano year default '2016'
//)default charset = utf8`)

//comando(`select nome, ano from cursos 
//  where ano <= '2016'
//  order by ano, nome asc;
//`)

//comando(`select nome, ano from cursos
//  where ano between '2014' and '2016'
//  order by nome
//`)

//comando(`
//  select nome, descricao, ano  from cursos
//  where  ano in (2014, 2016, 2020)
//  order by ano
//`)


//comando(`
//  select nome, carga, totaulas from cursos
//  where carga > 35 and totaulas <= 30
//`)


//comando(`
//  select count(*) from cursos
//  where carga > 35 and totaulas <= 30
//`)


//comando(`
//  select max(carga) from cursos
//  order by carga
//`)


//comando(`
//  select max(totaulas) from cursos
//  where ano = '2016'
//`)

//comando(`
//  select min(totaulas) from cursos
//  where ano = '2016'
//`)


//comando(`
//  select avg(totaulas) from cursos
//  where ano = '2016'
//`)


//comando(`
//  select totaulas, count(*) from cursos
//  group by totaulas
//  order by totaulas
//`)

//comando(`
//  select ano, count(*) from cursos
//  group by ano
//  having ano > 10
//  order by count(*) desc
//
//`)

//comando(`
//  select ano, count(*) from cursos
//  where totaulas > 30
//  group by ano
//  having ano > 10
//  order by count(*) desc
//`)


//comando(`select avg(carga) from cursos`)


//comando(`
//  select carga, count(*) from cursos
//  where ano > 2015
//  group by carga
//`)

//comando(`
//  select carga, count(*) from cursos
//  where ano > 2015
//  group by carga
//  having carga > (select avg(carga) from cursos)
//`)

//comando(`
//  select * from cursos
//  where nome like 'P%'
//`)


//comando(`
//  select * from cursos
//  where nome like '%a'
//`)


//comando(`
//  select * from cursos
//  where nome not like '%a%'
//`)

//comando(`
//  update cursos set nome = 'Paoo' where idcurso = 9 
//`)

//comando(`
//  select nome from cursos
//  where idcurso = 9
//`)

//comando(`
//  select nome from cursos
//  where nome like 'ph%p_'
//`)

//comando(`
//  select distinct nacionalidade from gafanhotos
//  order by nacionalidade
//`)


//comando(`
//  select distinct carga from cursos
//  order by carga
//`)

//comando(`
//  INSERT INTO cursos 
//  (idcurso, nome, descricao, carga, tataulas, ano) 
//  VALUES 
//  (NULL, 'orkut', 'mano', '55', '23', '2016');
//`)

//comando(`update cursos
//  set nome = 'java', ano = '2015', carga = '40'
//  where idcurso = '4'
//  limit 1
//`)

//comando(`drop table if exists alunos`)

//comando(`delete from cursos
//  where idcurso = 1
//`)

//comando(`alter table cursos add column idcurso int first`)

//comando(`truncate table cursos`)

//comando(`alter table cursos add primary key (idcurso)`)

//comando(`describe`)

//comando(`select * from pessoas`)

//comando(`alter table pessoas rename to ganha`)

//comando(`alter table pessoas change column profissao prof varchar(10)`)

//comando(`alter table pessoas modify column profissao varchar(20) not null`)

//comando(`alter table pessoas modify column codigo int not null`)

//comando('alter table pessoas drop column profissao ')

//comando(`alter table pessoas add column profissao varchar(10)`)

//comando(`alter table pessoas add column profissao varchar(10) after nome`)

//comando(`alter table pessoas add column codigo int first`)

//comando('show databases')

//comando('show tables')

//comando(`status`)


// foreigh key 

//comando(`
//  alter table cadastro.gafanhotos 
//  add column cursopreferido int
//`)

//comando(`
//  alter table cadastro.gafanhotos
//  add foreign key (cursopreferido)
//  references cursos(idcurso)
//`)


//comando(`select * from cadastro.gafanhotos`)

//comando(`
//  update cadastro.gafanhotos 
//  set cursopreferido = '6'
//  where id = '1'
//`)


//comando(`
//  delete from cadastro.cursos where idcurso = '6'
//`)


//comando(`
//  select gafanhotos.nome, gafanhotos.cursopreferido, cursos.idcurso, cursos.nome, cursos.ano
//  from cadastro.gafanhotos inner join cadastro.cursos
//  on cursos.idcurso = gafanhotos.cursopreferido
//`)


//comando(`
//  select g.nome, g.cursopreferido, c.idcurso, c.nome, c.ano
//  from cadastro.gafanhotos as g left outer join cadastro.cursos as c
//  on c.idcurso = g.cursopreferido
//  order by g.nome
//`)


//comando(`
//  select g.nome, g.cursopreferido, c.idcurso, c.nome, c.ano
//  from cadastro.gafanhotos as g right outer join cadastro.cursos as c
//  on c.idcurso = g.cursopreferido
//  order by g.nome
//`)

comando('use cadastro')


//comando(`
//  create table if not exists gafanhoto_assiste_curso(
//    id int not null auto_increment,
//    data date,
//    idgafanhoto int,
//    idcurso int,
//    primary key(id),
//    foreign key (idgafanhoto) references gafanhotos(id),
//    foreign key (idcurso) references cursos(idcurso)
//  ) default charset = utf8
//`)

//comando(`
//  insert into 
//  gafanhoto_assiste_curso
//  values
//  (default, '2014-03-01', '1', '2')
//`)


//comando(`
//  select g.nome, c.nome from gafanhotos g
//  join gafanhoto_assiste_curso a
//  on g.id = a.idgafanhoto
//  join cursos c
//  on c.idcurso = a.idcurso
//  order by g.nome
//`)

comando(`
  select * from cadastro.gafanhotos
  join cursos
  on id = idcurso
`)


setInterval(a=>console.log('ok'),2000)