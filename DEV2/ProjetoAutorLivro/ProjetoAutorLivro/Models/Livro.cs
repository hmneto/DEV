//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ProjetoAutorLivro.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Livro
    {
        public int IdLivro { get; set; }
        public string Nome { get; set; }
        public Nullable<System.DateTime> DataCadastro { get; set; }
        public byte IdAutor { get; set; }
        public string Editora { get; set; }
        public int Paginas { get; set; }
    
        public virtual Autor Autor { get; set; }
    }
}
