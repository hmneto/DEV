using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManipulacaoDiretorios
{
    class Arquivo
    {
        private static string linha = "";

        public static List<string> LerAquivo(string nomeArquivo)
        {
            StreamReader arquivo = File.OpenText(nomeArquivo);
            var linhas = new List<string>();
            while (linha != null)
            {
                linha = arquivo.ReadLine();
                linhas.Add(linha);
                
            }
            return linhas;
        }

        public static void Gravar(string caminhoArquivo, string salvar)
        {
            
            if (File.Exists(caminhoArquivo))
            {
                StreamWriter f = new StreamWriter(caminhoArquivo);
                f.WriteLine(salvar);
                f.Close();
            }
            else
            {
                StreamWriter f = new StreamWriter(caminhoArquivo);
                f.WriteLine(salvar);
                f.Close();
            }


            
        }
    }
}
