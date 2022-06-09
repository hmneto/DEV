using MobileTeste.Modelo;
using Newtonsoft.Json;
using System.Net;


namespace MobileTeste
{
    public class ViaCepServico
    {
        private static string EnderecoURL = "http://viacep.com.br/ws/{0}/json/";
        public static Endereco BuscarEnderecoViaCEP(string cep)
        {
            string novoEnderecoURL = string.Format(EnderecoURL, cep);
            WebClient wc = new WebClient();
            string Conteudo = wc.DownloadString(novoEnderecoURL);
            Endereco endereco = JsonConvert.DeserializeObject<Endereco>(Conteudo);
            if (endereco.cep == null) return null;
            return endereco;
        }
    }
}
