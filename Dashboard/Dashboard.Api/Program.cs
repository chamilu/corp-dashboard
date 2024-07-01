using Dashboard.Api.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
    options.AddDefaultPolicy(builder =>
        builder.WithOrigins("*")
            .AllowAnyHeader()
            .AllowAnyMethod()));

builder.Services.AddControllers();
builder.Services.AddSingleton<IDashboardService, DashboardService>();

var app = builder.Build();

app.UseCors();

app.MapGet("/greet", () => "Hello World!");


app.MapControllers();

app.Run();