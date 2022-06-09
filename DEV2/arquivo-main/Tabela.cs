using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Text;

namespace BancoTX
{
    public class Tabela
    {
        public string Nome { get; set; }
        public MySqlConnection myConn = new MySqlConnection("server=localhost; userid=root; database=TX");
        



        public Tabela(string nome)
        {
            this.Nome = nome; 
        }
        public string SalvarDados()
        {
            try
            {
                myConn.Open();
                MySqlCommand comando = new MySqlCommand("insert into tabela (nome) value (@nome)", myConn);
                comando.Parameters.AddWithValue("nome", this.Nome);
                comando.ExecuteNonQuery();
                return "sucesso";
            }
            catch
            {
                return "erro";
            }
        }
    }
}
