using Microsoft.AspNetCore.Mvc;

namespace ReactSsrMvc.Controllers;

[ApiController]
[Route("api")]
public class ApiController : ControllerBase
{
    [HttpGet("home")]
    public IActionResult GetHomeData()
    {
        return Ok(new { message = "Ana Sayfaya Hoş Geldiniz! (Next.js + .NET)" });
    }

    [HttpGet("contact")]
    public IActionResult GetContactData()
    {
        return Ok(new { message = "İletişim Sayfasına Hoş Geldiniz! (Next.js + .NET)" });
    }

    [HttpPost("contact")]
    public IActionResult PostContact([FromBody] ContactForm form)
    {
        // Email gönder, veritabanına kaydet, vb.
        Console.WriteLine($"Contact form received: {form.Name} - {form.Message}");
        return Ok(new { success = true, message = "Mesajınız alındı!" });
    }
}

public class ContactForm
{
    public string Name { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
}
