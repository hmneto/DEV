using AutoMapper;
using System;
using System.Collections.Generic;

namespace AutoMapperList
{
    class Program
    {
        static void Main(string[] args)
        {
            //Mapper.Initialize(cfg =>cfg.CreateMap<Source,Destination>());


            var config = new MapperConfiguration(cfg => cfg.CreateMap<Source, Destination>());

            var mapper = config.CreateMapper();

            //var sources = new[] { new Source { Value = 1 } };

            var sources = new List<Source>() { new Source { Value = 1 }, new Source { Value = 2 } };

            List<Destination> ArrayDestination = mapper.Map<List<Source>, List<Destination>>(sources);

            //var listDestination = mapper.Map<Source[], List<Destination>>(sources);

            // or
            //var mapper = new Mapper(config);



            Console.ReadLine();
        }
    }

    public class Source
    {
        public int Value { get; set; }
        public string Teste { get; set; }
    }

    public class Destination
    {
        public int Value { get; set; }
    }
}
