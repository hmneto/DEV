using iTextSharp.text;
using iTextSharp.text.pdf;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace fetch_relatorio_pdf.Services
{
    public class MSPDFFooter : PdfPageEventHelper
    {
        public string Empresa { get; set; }

        public MSPDFFooter(string _empresa)
        {
            this.Empresa = _empresa;

        }
        public override void OnOpenDocument(PdfWriter writer, Document doc)
        {
            base.OnOpenDocument(writer, doc);
        }

        public override void OnStartPage(PdfWriter writer, Document doc)
        {
            base.OnStartPage(writer, doc);

            ImprimeCabecalho(writer, doc);
        }

        public override void OnEndPage(PdfWriter writer, Document doc)
        {
            base.OnEndPage(writer, doc);

            //ImprimeRodape(writer, doc);
        }

        private void ImprimeRodape(PdfWriter writer, Document doc)
        {
            BaseColor preto = new BaseColor(0, 0, 0);
            Font font = FontFactory.GetFont("Verdana", 8, Font.NORMAL, preto);
            Font titulo = FontFactory.GetFont("Verdana", 12, Font.BOLD, preto);
            float[] sizes = new float[] { 1f };
            PdfPTable table = new PdfPTable(1);
            table.TotalWidth = doc.PageSize.Width - (doc.LeftMargin + doc.RightMargin);
            table.SetWidths(sizes);
            PdfPCell cell = new PdfPCell(new Phrase("Página: " + (doc.PageNumber).ToString(), font));
            cell.Border = 0;
            cell.HorizontalAlignment = Element.ALIGN_RIGHT;
            table.AddCell(cell);
            table.WriteSelectedRows(0, -1, doc.LeftMargin, (doc.PageSize.Height - 10), writer.DirectContent);
        }

        static public PdfPCell CreateCell(string text,
            Font fonte,
            BaseColor corBorda,
            BaseColor corFundo,
            int MesclarCelulas,
            int borda = PdfPCell.NO_BORDER,
            int HorizontalAlignment = Element.ALIGN_LEFT)
        {
            var cell = new PdfPCell(new Phrase(text, fonte));
            cell.HorizontalAlignment = HorizontalAlignment;
            cell.Padding = 10;
            cell.Border = borda;
            cell.BorderColor = corBorda;
            if (corFundo != null)
            {
                cell.BackgroundColor = corFundo;
            }

            if (MesclarCelulas > 1)
            {
                cell.Colspan = MesclarCelulas;
            }

            return cell;
        }


        private void ImprimeCabecalho(PdfWriter writer, Document doc)
        {
            BaseColor preto = new BaseColor(0, 0, 0);
            Font font = FontFactory.GetFont("Verdana", 12, Font.NORMAL, preto);
            Font titulo = FontFactory.GetFont("Verdana", 30, Font.BOLD, preto);
            float[] sizes = new float[] { 1f };
            PdfPTable table = new PdfPTable(sizes.Length);
            table.TotalWidth = doc.PageSize.Width - (doc.LeftMargin + doc.RightMargin);
            table.SetWidths(sizes);
            table.AddCell(CreateCell(Empresa, titulo, preto, null, 0, PdfPCell.NO_BORDER));
            table.WriteSelectedRows(0, -1, doc.LeftMargin, (doc.PageSize.Height - 10), writer.DirectContent);
        }

        public override void OnCloseDocument(PdfWriter writer, Document document)
        {
            base.OnCloseDocument(writer, document);
        }
    }
}