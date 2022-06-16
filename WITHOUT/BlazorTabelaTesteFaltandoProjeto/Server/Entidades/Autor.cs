using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorTabelaTeste.Server.Entidades
{
    public class Autor
    {
        [Key]
        public int IdAutor { get; set; }
        public string Nome { get; set; }
        public string Pais { get; set; }

        public List<Livro> Livros { get; set; }
    }
}
