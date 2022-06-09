using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace App1_Layout
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
        }


        void GoPaginaStack(object sender, EventArgs args)
        {
            Navigation.PushAsync(new Layout.Stack.StackPage());
        }

        void GoPaginaGrid(object sender, EventArgs args)
        {
            Navigation.PushAsync(new Layout.Grid.GridPage());
        }

        void GoPaginaAbsolute(object sender, EventArgs args)
        {
            Navigation.PushAsync(new Layout.Absolut.AbsolutPage());
        }

        void GoPaginaRelative(object sender, EventArgs args)
        {
            Navigation.PushAsync(new Layout.Relative.RelativePage());
        }
        void GoPaginaScroll(object sender, EventArgs args)
        {
            Navigation.PushAsync(new Layout.Scroll.ScrollPage());
        }
    }
}
