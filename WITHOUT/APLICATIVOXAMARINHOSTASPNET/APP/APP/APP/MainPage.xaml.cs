using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace APP
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
        }


        public async void ApiRequest(object sender, EventArgs args)
        {

            using (var client = new HttpClient())
            {

                try
                {
                    var uri = "http://10.0.2.2:29187/teste/Get";
                    //var uri = "http://192.168.1.1:5102/Teste";
                    string result = await client.GetStringAsync(uri);
                    Console.WriteLine(result);
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                }

            }
        }
    }
}
