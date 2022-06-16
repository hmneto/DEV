using BlazorTabelaTeste.Server.Entidades;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;


namespace BlazorTabelaTeste.Server
{
    public class AppContext : DbContext
    {
        public AppContext(DbContextOptions<AppContext> options) : base(options)
        {

        }

        public DbSet<Autor> Autor { get; set; }
        public DbSet<Livro> Livro { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Livro>()
                .HasOne(p => p.Autor)
                .WithMany(b => b.Livros)
                .HasForeignKey(p => p.IdAutorForeignKey);

            //modelBuilder
        }
    }
}
