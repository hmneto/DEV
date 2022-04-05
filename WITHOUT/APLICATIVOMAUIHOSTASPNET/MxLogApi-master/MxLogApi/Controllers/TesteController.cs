using Microsoft.AspNetCore.Mvc;

namespace MxLogApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TesteController : ControllerBase
    {
        [HttpGet(Name = "Get2")]
        public string Get()
        {
            return "Resposta Servidor";
        }
    }
}