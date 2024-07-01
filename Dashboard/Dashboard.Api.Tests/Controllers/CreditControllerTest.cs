
using Moq;
using Dashboard.Api.Controllers;
using Dashboard.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace Dashboard.Api.Tests;

public class CreditControllerTest
{
    [Fact]
    public void Get_ReturnsOk_WhenValueExists()
    {
        var mockService = new Mock<IDashboardService>();
        mockService.Setup(svc => svc.GetMonthCount("6M")).Returns(6);
        mockService.Setup(svc => svc.GeneratePrices(6, 10.0, 100.0)).Returns([12.5, 11.4, 23.5, 53.4, 65.4, 54.6]);

        var controller = new CreditController(mockService.Object);
        var result = controller.GetCredits("6M");

        var okResult = Assert.IsType<OkObjectResult>(result);
        Assert.NotNull(okResult.Value);
    }
}