using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace AplicativoMXSystem
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
        }

        public string Texto { get; set; }
        public void HandleClick(object sender, EventArgs args)
        {
            //Application.Current.MainPage.DisplayAlert("Title", "message content", "OK");
        }

        public void HandleTextChanged(object sender, TextChangedEventArgs args)
        {
            //Application.Current.MainPage.DisplayAlert("Title", args.NewTextValue, "OK");
            Texto = args.NewTextValue;
        }

        public void HandleEnterPress(object sender, EventArgs args)
        {
            //Application.Current.MainPage.DisplayAlert("Title", Texto, "OK");            
            Label newTodo = new Label();
            newTodo.Text = inputField.Text;
            TodoList.Children.Add(newTodo);
            inputField.Text = "";
        }
    }
}
