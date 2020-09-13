using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CarSales.ServiceLayer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CarSales.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CarSalesController : ControllerBase
    { 

        private readonly ILogger<CarSalesController> _logger;
        private readonly ICarService _carService;
        const string sessionKey = "CarSales";
        public CarSalesController(ILogger<CarSalesController> logger, ICarService carService)
        {
            _logger = logger;
            _carService = carService;
        }

        [HttpGet]
        public List<Car> Get()
        {
            return this._carService.GetData(HttpContext.Session.GetString(sessionKey));
        }

        [HttpPost]
        [Route("save")]
        public bool Save(Car car)
        {
            var response= this._carService.SaveData(car, HttpContext.Session.GetString(sessionKey));
            HttpContext.Session.SetString(sessionKey, response);
            return true;
        }

        
    }
}
