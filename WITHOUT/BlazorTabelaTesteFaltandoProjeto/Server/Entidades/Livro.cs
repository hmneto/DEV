using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorTabelaTeste.Server.Entidades
{
    public class Livro
    {
        [Key]
        public int IdLivro { get; set; }
        public string NomeLivro { get; set; }

        public int IdAutorForeignKey { get; set; }
        public Autor Autor { get; set; }
    }
}
