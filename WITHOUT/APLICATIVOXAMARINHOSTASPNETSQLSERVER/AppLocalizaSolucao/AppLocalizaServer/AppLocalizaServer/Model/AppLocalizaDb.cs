using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace AppLocalizaServer.Model
{
    public partial class AppLocalizaDb : DbContext
    {
        public AppLocalizaDb()
        {
        }

        public AppLocalizaDb(DbContextOptions<AppLocalizaDb> options)
            : base(options)
        {
        }

        public virtual DbSet<Tracking> Trackings { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=sqlserver,1433;Database=AppLocaliza;User Id=sa;Password=Pass@word;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Tracking>(entity =>
            {
                entity.Property(e => e.DiaHora).HasDefaultValueSql("(sysdatetimeoffset())");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
