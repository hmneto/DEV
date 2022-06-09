using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using Cell.Pagina;

namespace Cell.Menu
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Master : MasterDetailPage
    {
        public Master()
        {
            InitializeComponent();
        }

        public void GoPagina1(object sender, EventArgs args)
        {
            Detail = new NavigationPage(new TextCellPage());
        }

        public void GoPagina2(object sender, EventArgs args)
        {
            Detail = new NavigationPage(new ImageCellPage());
        }

        public void GoPagina3(object sender, EventArgs args)
        {
            Detail = new NavigationPage(new EntryCellView());
        }
        public void GoPagina4(object sender, EventArgs args)
        {
            Detail = new NavigationPage(new SwitchCellPage());
        }
    }
}