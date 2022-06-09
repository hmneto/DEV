using Cell.Modelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using Cell.Menu;

namespace Cell.Pagina
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class ImageCellPage : ContentPage
    {
        public ImageCellPage()
        {
            InitializeComponent();

            List<Funcionario> Lista = new List<Funcionario>();
            Lista.Add(new Funcionario() { Foto = "https://images.vexels.com/media/users/3/140750/isolated/lists/c9b1b66ee3fc60f9bb0aa9a5bee63a9f-avatar-de-perfil-masculino-2.png", Nome = "José", Cargo = "Presidente" });
            Lista.Add(new Funcionario() { Foto = "https://images.vexels.com/media/users/3/140236/isolated/lists/20d26c1064c9a7a4ccfc85820529b3f1-avatar-de-perfil-feminino-3.png", Nome = "Maria", Cargo = "Gerente de vendas" });
            Lista.Add(new Funcionario() { Foto = "https://images.vexels.com/media/users/3/140236/isolated/lists/20d26c1064c9a7a4ccfc85820529b3f1-avatar-de-perfil-feminino-3.png", Nome = "Elaine", Cargo = "Gerente de marketing" });
            Lista.Add(new Funcionario() { Foto = "https://images.vexels.com/media/users/3/140750/isolated/lists/c9b1b66ee3fc60f9bb0aa9a5bee63a9f-avatar-de-perfil-masculino-2.png", Nome = "Felipe", Cargo = "Entregador" });
            Lista.Add(new Funcionario() { Foto = "https://images.vexels.com/media/users/3/140750/isolated/lists/c9b1b66ee3fc60f9bb0aa9a5bee63a9f-avatar-de-perfil-masculino-2.png", Nome = "João", Cargo = "vendedor" });


            ListaFuncionario.ItemsSource = Lista;

        }


    }
}