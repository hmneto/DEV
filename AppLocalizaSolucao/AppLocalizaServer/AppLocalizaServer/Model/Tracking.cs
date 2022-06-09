using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace AppLocalizaServer.Model
{
    [Table("Tracking")]
    public partial class Tracking
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("lat", TypeName = "decimal(8, 6)")]
        public decimal Lat { get; set; }
        [Column("long", TypeName = "decimal(8, 6)")]
        public decimal Long { get; set; }
        [Column("dia_hora")]
        public DateTimeOffset DiaHora { get; set; }
    }
}
