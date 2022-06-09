﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Servidor.Server.Controllers
{
    [Route("api/[controller]")]
    //[ApiController]
    public class TestController : ControllerBase
    {
        [HttpGet("Get/{param}")]
        public string Get(string param)
        {
            return param;
        }
    }
}
