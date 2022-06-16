using AutoMapper;
using BlazorTabelaTeste.Server.Entidades;
using BlazorTabelaTeste.Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorTabelaTeste.Server.AutoMapper
{
    public class AutoMapperSetup:Profile
    {
        public AutoMapperSetup()
        {
            CreateMap<Autor, AutorViewModel>();
            CreateMap<AutorViewModel, Autor>();

            CreateMap<Livro, LivroViewModel>();
            CreateMap<LivroViewModel, Livro>()
                .ForMember(person => person.Autor, opt => opt.Ignore());

        }
    }
}
