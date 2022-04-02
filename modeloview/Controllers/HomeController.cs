using modeloview.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace modeloview.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            List<Modelo> modelo = new List<Modelo>();

            modelo.Add(new Modelo { Nome = "123", Valor = 123 });
            modelo.Add(new Modelo { Nome = "456", Valor = 456 });
            return View(modelo);
        }

        public ActionResult Contact()
        {

            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}