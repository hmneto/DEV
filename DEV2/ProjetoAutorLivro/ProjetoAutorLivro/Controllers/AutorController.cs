using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using ProjetoAutorLivro.Models;

namespace ProjetoAutorLivro.Controllers
{
    public class AutorController : Controller
    {
        private BOOKSEntities db = new BOOKSEntities();

        // GET: Autor
        public ActionResult Index()
        {
            var dados = db.Autor;
            return View(dados);
        }

        public ActionResult Novo()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Add(Autor autor)
        {
            var ultimoResgistro = db.Autor.OrderByDescending(t => t.IdAutor).FirstOrDefault();
            var id = ultimoResgistro == null ? 1 : ultimoResgistro.IdAutor + 1;

            autor.IdAutor = (byte)id;
            db.Autor.Add(autor);
            db.SaveChanges();
            return Redirect("/Autor/Index");
        }

        public ActionResult Editar(int Id)
        {
            Autor autorById = db.Autor.Find(Id);
            return View(autorById);
        }

        [HttpPost]
        public ActionResult Edit(Autor autor)
        {
            //db.Entry(autor).State = System.Data.Entity.EntityState.Modified;
            db.Entry(autor).State = EntityState.Modified;
            db.SaveChanges();
            return Redirect("/Autor/Index");
        }


        public ActionResult Remove(int Id)
        {
            Autor autorById = db.Autor.Find(Id);
            if (autorById.Livro.Count < 1)
            {
                db.Autor.Remove(autorById);
                db.SaveChanges();
                return Redirect("/Autor/Index");
            }

            return Redirect("/Autor/Index");

        }


        //public string Listar()
        //{
        //    var dados = db.Autor;

        //    var aaa = JsonConvert.SerializeObject(dados);

        //    return aaa;
        //}


    }
}