namespace Dashboard.Api.Services
{
    public interface IDashboardService
    {

        int GetMonthCount(string duration);

        double[] GeneratePrices(int count, double minPrice, double maxPrice);
    }
}