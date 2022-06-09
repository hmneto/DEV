using ProjetoAutorLivro.Models;
using ProjetoAutorLivro.Models.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjetoAutorLivro.Controllers
{
    public class LivroController : Controller
    {
        private BOOKSEntities db = new BOOKSEntities();
        // GET: Livro
        public ActionResult Index()
        {
            var books = db.Livro;
            return View(books);
        }


        public ActionResult Novo()
        {
            LivroModel livroModel = new LivroModel();
            livroModel.Autor = db.Autor.ToList();
            return View(livroModel);
        }

        [HttpPost]
        public ActionResult Add(Livro livro)
        {
            //var ultimoResgistro = db.Livro.OrderByDescending(t => t.IdLivro).FirstOrDefault();
            //var id = ultimoResgistro == null ? 1 : ultimoResgistro.IdLivro + 1;



            //livro.IdLivro = id;
            livro.IdAutor = (byte)livro.IdAutor;

            db.Livro.Add(livro);
            db.SaveChanges();
            return Redirect("/Livro/Index");
        }

        public ActionResult Editar(int Id)
        {
            Livro livroById = db.Livro.Find(Id);
            ViewBag.ListaAutores = db.Autor;
            return View(livroById);
        }

        [HttpPost]
        public ActionResult Edit(Livro livro)
        {
            db.Entry(livro).State = EntityState.Modified;
            db.SaveChanges();
            return Redirect("/Livro/Index");
        }


        public ActionResult Remove(int Id)
        {
            Livro livroById = db.Livro.Find(Id);

            db.Livro.Remove(livroById);
            db.SaveChanges();
            return Redirect("/Livro/Index");

        }
    }
}