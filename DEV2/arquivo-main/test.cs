public ActionResult BaixarRemessa(string id_arquivo)
        {
            var listaRemessa = _db.USP_BUSCA_ARQUIVOS_REMESSA_DOWNLOAD(Guid.Parse(id_arquivo)).FirstOrDefault();

            try
            {
                string sFileName = "FOLHA-PARCEIROS-" + DateTime.Now.ToString("ddMMyyyy") + ".txt";
                return File(listaRemessa.dados_arquivo, "text/plain", sFileName);
            }
            catch (Exception ex)
            {
                return null;
            }
        }