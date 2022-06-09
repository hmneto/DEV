using System.Net;

namespace MxLogApp;

public partial class MainPage : ContentPage
{

	public MainPage()
	{
		InitializeComponent();
	}

	public void ApiRequest(object sender,EventArgs args)
    {

        using (var client = new WebClient())
        {

            try
            {
                var uri = "http://10.0.2.2:5102/Teste";
                var result = client.DownloadString(uri);
                Console.WriteLine(result);
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
            }
       
        }
    }

}

