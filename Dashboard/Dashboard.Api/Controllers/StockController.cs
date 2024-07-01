using Microsoft.AspNetCore.Mvc;
using Dashboard.Api.Services;

namespace Dashboard.Api.Controllers
{
    [Route("api")]
    [ApiController]
    public class StockController : Controller
    {
        private readonly IDashboardService dashboardService;

        public StockController(IDashboardService _dashboardService)
        {
            dashboardService = _dashboardService;
        }

        [HttpGet("stock")]
        public IActionResult GetStocks([FromQuery] string duration)
        {
            try
            {
                int monthCount = dashboardService.GetMonthCount(duration);
                double[] prices = dashboardService.GeneratePrices(monthCount, 10.0, 100.0);
                return Ok(new { data = prices });
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}