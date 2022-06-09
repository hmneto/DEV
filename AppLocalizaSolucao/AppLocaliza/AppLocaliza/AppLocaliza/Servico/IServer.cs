using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using AppLocaliza.Model;
using System.Collections.ObjectModel;
using System.Net.Http.Headers;
using System.Threading;
using Xamarin.Essentials;

namespace AppLocaliza.Servico
{
    public static class IServer
    {
        static Location oldLocation = null;
        static CancellationTokenSource cts = null;
        public static async Task EnviarDadosServidorAsync()
        {

            do
            {
                string jsonData = null;
                try
                {
                    var request = new GeolocationRequest(GeolocationAccuracy.Medium, TimeSpan.FromSeconds(10));
                    cts = new CancellationTokenSource();
                    var localizacao = await Geolocation.GetLocationAsync(request, cts.Token);


                    //var localizacao = await Geolocation.GetLastKnownLocationAsync();
                    if (localizacao != null)
                    {
                        var post = new { Lat= Convert.ToDecimal(localizacao.Latitude.ToString()), Long= Convert.ToDecimal(localizacao.Longitude.ToString()) };
                        jsonData = JsonConvert.SerializeObject(post);
                    }
                }
                catch (FeatureNotSupportedException fnsEx)
                {

                }
                catch (PermissionException pEx)
                {

                }
                catch (Exception ex)
                {

                }

         
                var client = new HttpClient();
                client.BaseAddress = new Uri("http://ip172-18-0-12-c1es18gh550g00ejrai0-80.direct.labs.play-with-docker.com");

                var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
                HttpResponseMessage response = await client.PostAsync("/api/Trackings", content);
                var result = await response.Content.ReadAsStringAsync();
                Thread.Sleep(5000);

            } while (true);

        }
    }
}
