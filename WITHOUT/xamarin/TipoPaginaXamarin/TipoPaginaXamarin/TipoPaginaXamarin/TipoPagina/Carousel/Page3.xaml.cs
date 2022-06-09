using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TipoPaginaXamarin.TipoPagina.Navigation;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace TipoPaginaXamarin.TipoPagina.Carousel
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Page3 : ContentPage
    {
        public Page3()
        {
            InitializeComponent();
        }
        private void MudarPagina(object sender, EventArgs args)
        {
            //App.Current.MainPage = new NavigationPage(new Navigation.Modal()) { BarBackgroundColor = Color.Blue };
            Navigation.PushModalAsync(new Modal());
        }
    }
}