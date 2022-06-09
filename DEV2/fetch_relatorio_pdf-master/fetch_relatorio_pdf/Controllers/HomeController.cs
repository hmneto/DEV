using fetch_relatorio_pdf.Services;
using iTextSharp.text;
using iTextSharp.text.pdf;
using System;
using System.IO;
using System.Web.Mvc;
using static fetch_relatorio_pdf.Models.PayLoadToPdf;

namespace fetch_relatorio_pdf.Controllers
{
    public class HomeController : Controller
    {

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult GerarRelatorio(ListaPagamentosParceirosArquivadosParaRelatorio PayLoadToPdf)
        {
            try
            {
                Document doc = new Document(PageSize.A1, 0, 0, 90, 50);
                MemoryStream output = new MemoryStream();
                PdfWriter writer = PdfWriter.GetInstance(doc, output);
                var evento = new MSPDFFooter("Relatório - Chamados Arquivados");
                writer.PageEvent = evento;
                doc.Open();
                
                float[] colsW = { 1,1,1,1,1 };
                int colunas = colsW.Length;
                PdfPTable table = new PdfPTable(colunas);
                BaseColor preto = new BaseColor(0, 0, 0);
                BaseColor azul = new BaseColor(11, 154, 209);
                BaseColor fundo = new BaseColor(200, 200, 200);
                BaseColor branco = new BaseColor(255, 255, 255);
                Font font = FontFactory.GetFont("Verdana", 15, Font.NORMAL, preto);
                Font negrito = FontFactory.GetFont("Verdana", 15, Font.BOLD, preto);
                Font negritoLetraBranca = FontFactory.GetFont("Verdana", 15, Font.BOLD, branco);
                Font negritoLetraPreta = FontFactory.GetFont("Verdana", 15, Font.BOLD, preto);
                table.SetWidths(colsW);
                //table.HeaderRows = 1;
                table.WidthPercentage = 100f;

                table.DefaultCell.Border = PdfPCell.BOTTOM_BORDER;
                table.DefaultCell.BorderColor = preto;
                table.DefaultCell.BorderColorBottom = new BaseColor(255, 255, 255);
                table.DefaultCell.Padding = 0;

                table.AddCell(MSPDFFooter.CreateCell("Chamado", negritoLetraBranca, branco, preto, 0));
                table.AddCell(MSPDFFooter.CreateCell("Nome do Parceiro", negritoLetraBranca, branco, preto, 0));
                table.AddCell(MSPDFFooter.CreateCell("Data do Chamado", negritoLetraBranca, branco, preto, 0));
                table.AddCell(MSPDFFooter.CreateCell("Data do Arquivamento", negritoLetraBranca, branco, preto, 0));
                table.AddCell(MSPDFFooter.CreateCell("Nota Fiscal", negritoLetraBranca, branco, preto, 0));


                foreach (var item in PayLoadToPdf.ListaPagamentoParceiroArquivadoParaRelatorio)
                {
                    table.AddCell(MSPDFFooter.CreateCell(item.Chamado, negritoLetraPreta, branco, branco, 0));
                    table.AddCell(MSPDFFooter.CreateCell(item.NomeParceiro, negritoLetraPreta, branco, branco, 0));
                    table.AddCell(MSPDFFooter.CreateCell(item.DataDoChamado, negritoLetraPreta, branco, branco, 0));
                    table.AddCell(MSPDFFooter.CreateCell(item.DataArquivamento, negritoLetraPreta, branco, branco, 0));
                    table.AddCell(MSPDFFooter.CreateCell(item.NotaFiscal, negritoLetraPreta, branco, branco, 0));
                }

                // table.AddCell(CreateCell($"Roteiros: ", negrito, preto, null, 0));
                //string[] subs = retoro2.ROTEIRO.Split(new Char[] { '\n', '\t' });
                //string[] ae = new string[] { "QUEBRA_LINHA" };
                //string[] subs = retoro2.ROTEIRO.Split(ae, System.StringSplitOptions.RemoveEmptyEntries);
                doc.Add(table);

                if (output == null || output.Length == 0)
                {
                    throw new Exception("Sem dados para exibir.");
                }

                writer.Flush();

                if (writer.PageEmpty)
                {
                    doc.Add(new Paragraph("Nenhum registro para listar."));
                }

                doc.Close();
                return File(output.GetBuffer(), "application/pdf");
            }
            catch (Exception ex)
            {
                return Json(new { msg = ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }
    }
}