using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace fetch_relatorio_pdf.Models
{
    public class PayLoadToPdf
    {
        [Serializable()]
        public class ListaPagamentosParceirosArquivadosParaRelatorio
        {
            public List<PagamentoParceiroArquivadoParaRelatorio> ListaPagamentoParceiroArquivadoParaRelatorio { get; set; }
        }


        [Serializable()]
        public class PagamentoParceiroArquivadoParaRelatorio
        {
            public string NomeParceiro { get; set; }
            public string Chamado { get; set; }
            public string DataDoChamado { get; set; }
            public string DataArquivamento { get; set; }
            public string NotaFiscal { get; set; }
            public string Selecionado { get; set; }
        }
    }
}