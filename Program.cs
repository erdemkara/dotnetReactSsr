var builder = WebApplication.CreateBuilder(args);

// Add API services
builder.Services.AddControllers();

// Configure CORS for Next.js
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:3000") // Next.js dev server
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline
app.UseCors();
app.MapControllers();

app.Run();
