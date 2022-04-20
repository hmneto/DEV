using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;
using AppLocaliza.Servico;

namespace AppLocaliza
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();

            Enviar.Clicked += Envio;
        }

        public void Envio(object sender, EventArgs args)
        {
            IServer.EnviarDadosServidorAsync();
        }
    }
}
