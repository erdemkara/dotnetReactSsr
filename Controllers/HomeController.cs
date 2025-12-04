using Microsoft.AspNetCore.Mvc;

namespace ReactSsrMvc.Controllers;

public class HomeController : Controller
{

    public HomeController()
    {
    }

    // Catch-all route for React pages
    [Route("home")]
    public async Task<IActionResult> Index(string url)
    {
        
        return View();
    }
}
