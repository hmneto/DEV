using Cell.Modelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Cell.Pagina
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class TextCellPage : ContentPage
    {
        public TextCellPage()
        {
            InitializeComponent();

            List<Funcionario> Lista = new List<Funcionario>();
            Lista.Add(new Funcionario() { Nome = "José", Cargo = "Presidente" });
            Lista.Add(new Funcionario() { Nome = "Maria", Cargo = "Gerente de vendas" });
            Lista.Add(new Funcionario() { Nome = "Elaine", Cargo = "Gerente de marketing" });
            Lista.Add(new Funcionario() { Nome = "Felipe", Cargo = "Entregador" });
            Lista.Add(new Funcionario() { Nome = "João", Cargo = "vendedor" });


            ListaFuncionario.ItemsSource = Lista;
        }
    }
}