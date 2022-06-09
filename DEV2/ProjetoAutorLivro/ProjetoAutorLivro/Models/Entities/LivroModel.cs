using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjetoAutorLivro.Models.Entities
{
    public class LivroModel
    {
        public int IdLivro { get; set; }
        public string Nome { get; set; }
        public Nullable<System.DateTime> DataCadastro { get; set; }
        public byte IdAutor { get; set; }
        public string Editora { get; set; }
        public int Paginas { get; set; }
        public List<Autor> Autor { get; set; }
    }
}