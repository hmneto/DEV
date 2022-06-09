using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace UploadFKFinder.Controllers
{
    public class TesteController : Controller
    {
        private IHostEnvironment iHostEnvironment;

        public TesteController(IHostEnvironment _iHostEnvironment)
        {
            iHostEnvironment = _iHostEnvironment;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Teste(IFormFile upload)
        {
            var filename = DateTime.Now.ToString("yyyyMMddHHmmss") + upload.FileName;
            var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", filename);
            var stream = new FileStream(path, FileMode.Create);
            upload.CopyToAsync(stream);
            return Json(new { path = "/uploads/" + filename });
        }

        [HttpGet]
        public IActionResult filebrowse()
        {
            var dir = new DirectoryInfo(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads"));
            ViewBag.fileInfos = dir.GetFiles();
            return View();
        }
    }
}
