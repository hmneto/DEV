namespace Model
{
    using System;

    public class Duplicata
    {
        public Cliente cliente { get; set; }
        public string Numero { get; set; }
        public DateTime Emissao { get; set; }
        public DateTime Vencimento { get; set; }
        public decimal Valor { get; set; }
        public decimal Saldo { get; set; }
    }
}
