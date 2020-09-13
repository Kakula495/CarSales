using CarSales.Models;
using System;

namespace CarSales
{
    public class Car : Vehicle
    {
        public int ID { get; set; }

        public string VehicleType { get; set; }

        public string Engine { get; set; }

        public int Doors { get; set; }

        public int Wheels { get; set; }

        public string BodyType { get; set; }
    }
}
