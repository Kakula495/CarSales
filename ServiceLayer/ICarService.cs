using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarSales.ServiceLayer
{
    public interface ICarService
    {
        string SaveData(Car car,string cars);
        List<Car> GetData(string cars);
    }
}
