using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarSales.ServiceLayer
{
    public class CarService: ICarService
    {
        const string sessionKey = "CarSales";
        public string SaveData(Car car,string cars)
        {
            List<Car> data = new List<Car>();
            string response = cars;
            if (!string.IsNullOrWhiteSpace(cars))
            {
                data = JsonConvert.DeserializeObject<List<Car>>(cars);
                data.Add(car);
            }
            else
            {
                data.Add(car);
            }
            return JsonConvert.SerializeObject(data);
        }
        public List<Car> GetData(string cars)
        {
            List<Car> data = new List<Car>();
            if (!string.IsNullOrWhiteSpace(cars))
            {
                try
                {
                  data = JsonConvert.DeserializeObject<List<Car>>(cars);
                }
                catch (Exception ex)
                {

                }
            }
            return data;
        }
    }
}
