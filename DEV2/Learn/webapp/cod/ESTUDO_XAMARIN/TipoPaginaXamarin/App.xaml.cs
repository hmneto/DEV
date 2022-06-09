using System;
using TipoPaginaXamarin.TipoPagina.Master;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace TipoPaginaXamarin
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();

            //MainPage = new TipoPaginaXamarin.TipoPagina.Carousel.IntroducaoApp();
            //MainPage = new TipoPaginaXamarin.TipoPagina.Tabbed.Abas();
            //MainPage = new Master();
            MainPage = new TipoPaginaXamarin.TipoPagina.Carousel.IntroducaoApp();
        }

        protected override void OnStart()
        {
        }

        protected override void OnSleep()
        {
        }

        protected override void OnResume()
        {
        }
    }
}
