using BlazorTabelaTeste.Server.Entidades;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlazorTabelaTeste.Shared.Models;
using AutoMapper;

namespace BlazorTabelaTeste.Server.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
   
    public class AutorController : ControllerBase
    {
        AppContext _db;
        public readonly IMapper _mapper;

        public AutorController(IMapper Mapper, AppContext db)
        {
            _mapper = Mapper;
            _db = db;
        }

        public void SaveAutor(AutorViewModel parametro)
        {
            Autor autor = _mapper.Map<Autor>(parametro);
            _db.Autor.Add(autor);
            _db.SaveChanges();
        }

        public IList<AutorViewModel> GetAutores()
        {
            IList<Autor> listaAutores = _db.Autor.ToArray<Autor>();
            IList<AutorViewModel> autoresModel = _mapper.Map<IList<AutorViewModel>>(listaAutores);
            return autoresModel;
        }

        public AutorViewModel GetAutor(AutorViewModel autorViewModel)
        {
            Autor autor = _db.Autor.Find(autorViewModel.IdAutor);
            AutorViewModel autorView = _mapper.Map<AutorViewModel>(autor);
            return autorView;
        }

        public void ModifyAutor(AutorViewModel autorViewModel)
        {
            Autor autor = _mapper.Map<Autor>(autorViewModel);
            _db.Entry(autor).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _db.SaveChanges();
        }

        public void DeleteAutor(AutorViewModel autorViewModel)
        {
            Autor autor = _db.Autor.Find(autorViewModel.IdAutor);
            _db.Autor.Remove(autor);
            _db.SaveChanges();
        }
    }
}
