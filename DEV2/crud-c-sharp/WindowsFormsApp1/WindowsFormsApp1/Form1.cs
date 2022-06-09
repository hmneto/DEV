using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        SqlConnection sqlConnection = null;
        private string stringConnection = "Integrated Security=SSPI;Persist Security Info=False;Initial Catalog=banco;Data Source=HMNETON-NOTE";
        private string stringSql = string.Empty;


        private void button1_Click(object sender, EventArgs e)
        {
            stringSql = "insert into tabela (nome, email, celular) values (@nome, @email, @celular)";
            sqlConnection = new SqlConnection(stringConnection);
            SqlCommand command = new SqlCommand(stringSql, sqlConnection);
            command.Parameters.Add("@nome", SqlDbType.VarChar).Value = txt_nome.Text;
            command.Parameters.Add("@email", SqlDbType.VarChar).Value = txt_email.Text;
            command.Parameters.Add("@celular", SqlDbType.VarChar).Value = txt_celular.Text;
            try
            {
                sqlConnection.Open();
                command.ExecuteNonQuery();
                MessageBox.Show("Dados Cadastrado");

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);

            }
            finally
            {
                sqlConnection.Close();
            }
        }

        private void btn_pesquisar_Click(object sender, EventArgs e)
        {
            stringSql = "select * from tabela where id=@pesquisa";
            sqlConnection = new SqlConnection(stringConnection);
            SqlCommand command = new SqlCommand(stringSql, sqlConnection);
            command.Parameters.Add("@pesquisa", SqlDbType.VarChar).Value = txt_id.Text;

            try
            {
                if (txt_id.Text == string.Empty)
                {
                    MessageBox.Show("Você precisa digitar um ID");
                }

                sqlConnection.Open();

                SqlDataReader dataReader = command.ExecuteReader();

                if (dataReader.HasRows == false)
                {
                    throw new Exception("este ID não está cadastrado");
                }

                dataReader.Read();
                txt_nome.Text = Convert.ToString(dataReader["nome"]);
                txt_email.Text = Convert.ToString(dataReader["email"]);
                txt_celular.Text = Convert.ToString(dataReader["celular"]);

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);

            }
            finally
            {
                sqlConnection.Close();
            }
        }

        private void btn_alterar_Click(object sender, EventArgs e)
        {
            stringSql = "update tabela set nome = @nome, email = @email, celular = @celular where id = @id";
            sqlConnection = new SqlConnection(stringConnection);
            SqlCommand command = new SqlCommand(stringSql, sqlConnection);
            command.Parameters.Add("@nome", SqlDbType.VarChar).Value = txt_nome.Text;
            command.Parameters.Add("@email", SqlDbType.VarChar).Value = txt_email.Text;
            command.Parameters.Add("@celular", SqlDbType.VarChar).Value = txt_celular.Text;
            command.Parameters.Add("@id", SqlDbType.VarChar).Value = txt_id.Text;
         



            try
            {
                sqlConnection.Open();

                command.ExecuteNonQuery();

                MessageBox.Show("alterado");
            }

            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
            finally
            {
                sqlConnection.Close();
            }
        }

        private void btn_excluir_Click(object sender, EventArgs e)
        {
            stringSql = "delete from tabela where id = @id";
            sqlConnection = new SqlConnection(stringConnection);
            SqlCommand command = new SqlCommand(stringSql, sqlConnection);
            command.Parameters.Add("@id", SqlDbType.VarChar).Value = txt_id.Text;

            try
            {
                sqlConnection.Open();
                command.ExecuteNonQuery();
                MessageBox.Show("excluido");
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
            finally
            {
                sqlConnection.Close();
            }
        }
    }
}
