using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class TesteController
    {
        [HttpGet]
        public string Get()
        {
            return "Resposta Servidor";
        }
    }
}
