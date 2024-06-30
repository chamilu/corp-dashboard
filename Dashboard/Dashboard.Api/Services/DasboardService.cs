using System;

namespace Dashboard.Api.Services
{
    public class DashboardService : IDashboardService
    {
        private readonly Random random;

        public DashboardService()
        {
            random = new Random();
        }

        public int GetMonthCount(string duration)
        {
            if (string.IsNullOrWhiteSpace(duration))
            {
                throw new ArgumentException("Duration cannot be null or empty.");
            }

            int months;

            switch (duration)
            {
                case "6M":
                    months = 6;
                    break;
                case "12M":
                    months = 12;
                    break;
                case "3Y":
                    months = 13;
                    break;
                case "5Y":
                    months = 14;
                    break;
                default:
                    throw new ArgumentException("Invalid duration format.");
            }

            return months;
        }

        public double[] GeneratePrices(int count, double minPrice, double maxPrice)
        {
            if (count <= 0) throw new ArgumentException("Count must be greater than zero.");
            if (minPrice >= maxPrice) throw new ArgumentException("minPrice must be less than maxPrice.");

            double[] prices = new double[count];

            for (int i = 0; i < count; i++)
            {
                double price = random.NextDouble() * (maxPrice - minPrice) + minPrice;
                prices[i] = Math.Round(price, 2);
            }

            return prices;
        }
    }
}