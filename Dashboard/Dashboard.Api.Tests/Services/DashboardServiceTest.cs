using Dashboard.Api.Services;

namespace Dashboard.Api.Tests;

public class DashboardServiceTest
{
    [Fact]
    public void Get_Returns_6_When_Input_6M()
    {
        var service = new DashboardService();
        var result = service.GetMonthCount("6M");
        Assert.Equal(6, result);
    }

    [Fact]
    public void Get_Returns_12_When_Input_12M()
    {
        var service = new DashboardService();
        var result = service.GetMonthCount("12M");
        Assert.Equal(12, result);
    }

    [Fact]
    public void Get_Returns_2_List_Of_Price()
    {
        var service = new DashboardService();
        var result = service.GeneratePrices(2, 10, 20);
        Assert.Equal(2, result.Length);
    }
}