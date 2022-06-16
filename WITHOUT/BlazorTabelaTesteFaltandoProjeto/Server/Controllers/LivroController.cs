using AutoMapper;
using BlazorTabelaTeste.Server.Entidades;
using BlazorTabelaTeste.Shared.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorTabelaTeste.Server.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class LivroController : ControllerBase
    {
        AppContext _db;
        public readonly IMapper _mapper;

        public LivroController(IMapper Mapper, AppContext db)
        {
            _mapper = Mapper;
            _db = db;
        }

        public IList<LivroViewModel> GetLivros()
        {
            IList<Livro> listaLivros = _db.Livro.ToArray<Livro>();
            IList<LivroViewModel> livrosModel = _mapper.Map<IList<LivroViewModel>>(listaLivros);
            return livrosModel;
        }


        public void SaveLivro(LivroViewModel livroViewModel)
        {
            Livro livro = _mapper.Map<Livro>(livroViewModel);
            _db.Livro.Add(livro);
            _db.SaveChanges();
        }

        public void DeleteLivro(LivroViewModel livroViewModel)
        {
            Livro livro = _db.Livro.Find(livroViewModel.IdLivro);
            _db.Livro.Remove(livro);
            _db.SaveChanges();
        }

        public void ModifyLivro(LivroViewModel livroViewModel)
        {
            Livro livro = _mapper.Map<Livro>(livroViewModel);
            _db.Entry(livro).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _db.SaveChanges();
        }

        public LivroViewModel GetLivro(LivroViewModel livroViewModel)
        {
            Livro livro = _db.Livro.Find(livroViewModel.IdLivro);
            LivroViewModel livroView = _mapper.Map<LivroViewModel>(livro);
            return livroView;
        }
    }
}
