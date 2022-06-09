using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace App2
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
        }
        public void Clicado(object sender, EventArgs EvtArgs)
        {
            Application.Current.MainPage.DisplayAlert("Título", Texto, "OK");
        }

        public string Texto { get; set; }
        public void Atualiza(object sender, TextChangedEventArgs EvtArgs)
        {
            Texto = EvtArgs.NewTextValue;
        }


        public void Completo(object sender, EventArgs eventArgs)
        {
            Application.Current.MainPage.DisplayAlert("Título", Texto, "OK");
        }
    }
}
