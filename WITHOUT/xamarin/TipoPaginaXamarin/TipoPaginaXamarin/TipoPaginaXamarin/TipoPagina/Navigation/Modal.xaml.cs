using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace TipoPaginaXamarin.TipoPagina.Navigation
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Modal : ContentPage
    {
        public Modal()
        {
            InitializeComponent();
        }

        public void MudarParaPagina(object sender, EventArgs args)
        {
            //App.Current.MainPage = new NavigationPage(new Navigation.Modal()) { BarBackgroundColor = Color.Blue };
            App.Current.MainPage = new TipoPaginaXamarin.TipoPagina.Navigation.Page1();
            //Navigation.PushAsync(new Page1());
        }
         
        private void FecharModal(object sender, EventArgs args)
        {
           Navigation.PopModalAsync();  
        }
    }
}